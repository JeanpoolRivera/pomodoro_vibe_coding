const timeDisplay = document.getElementById("time-display");
const modeLabel = document.getElementById("mode-label");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");

const WORK_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

let totalSeconds = WORK_SECONDS;
let currentMode = "work";
let intervalId = null;

function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timeDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
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
      switchMode(currentMode === "work" ? "break" : "work");
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
  switchMode("work");
}

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
