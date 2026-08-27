const timeDisplay = document.getElementById("time-display");
const modeLabel = document.getElementById("mode-label");
const pomodoroCount = document.getElementById("pomodoro-count");
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notification-text");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");

const WORK_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

let totalSeconds = WORK_SECONDS;
let currentMode = "work";
let pomodorosCompleted = 0;
let intervalId = null;
let notificationTimeout = null;

function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timeDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function playSound() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const frequencies = [523.25, 659.25, 783.99];

  frequencies.forEach(function (freq, i) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = freq;

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime + i * 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 0.4);

    oscillator.start(audioCtx.currentTime + i * 0.15);
    oscillator.stop(audioCtx.currentTime + i * 0.15 + 0.4);
  });
}

function showNotification(nextMode) {
  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }

  const nextLabel = nextMode === "work" ? "Work" : "Short Break";
  const cssClass = nextMode === "work" ? "break-finished" : "work-finished";

  notification.className = "notification " + cssClass;
  notificationText.textContent = "Time's up! Next: " + nextLabel;

  playSound();

  notificationTimeout = setTimeout(function () {
    notification.className = "notification hidden";
    notificationTimeout = null;
  }, 4000);
}

function switchMode(mode) {
  currentMode = mode;
  totalSeconds = mode === "work" ? WORK_SECONDS : BREAK_SECONDS;
  modeLabel.textContent = mode === "work" ? "Work" : "Short Break";
  updateDisplay();
}

function startTimer() {
  if (intervalId) return;

  intervalId = setInterval(function () {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;

      if (currentMode === "work") {
        pomodorosCompleted++;
        pomodoroCount.textContent = pomodorosCompleted;
      }

      const nextMode = currentMode === "work" ? "break" : "work";
      showNotification(nextMode);
      switchMode(nextMode);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;

  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
    notificationTimeout = null;
    notification.className = "notification hidden";
  }

  switchMode("work");
}

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
