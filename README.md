# Pomodoro - Vibe Coding

## Descripción

Aplicación web de gestión de tiempo tipo Pomodoro desarrollada utilizando HTML5, CSS3 y JavaScript Vanilla mediante el enfoque de Vibe Coding.

## Metodología

El desarrollo se realizará mediante un proceso conversacional e iterativo con asistencia de Inteligencia Artificial, sin una planificación arquitectónica previa.

## Requisitos

* Temporizador de 25 minutos para trabajo.
* Temporizador de 5 minutos para descanso.
* Controles para iniciar, pausar y reiniciar.
* Notificación al finalizar cada ciclo.
* Contador de Pomodoros completados.
* Diseño responsive y accesible.
* Uso exclusivo de HTML5, CSS3 y JavaScript Vanilla.

## Bitácora de prompts

### Prompt 1 — Estructura HTML inicial
**Objetivo:** Crear la estructura básica de la aplicación Pomodoro.

**Prompt:**
> Quiero crear una aplicación web tipo Pomodoro usando HTML, CSS y JavaScript Vanilla. Empecemos poco a poco; por ahora quiero que crees solamente la estructura HTML de la aplicación, con un título, el modo actual (Work o Short Break), un temporizador, botones para Iniciar, Pausar y Reiniciar, y un contador que muestre los Pomodoros completados. Haz una estructura sencilla y semántica que podamos mejorar después. Por ahora no agregues estilos ni lógica JavaScript.

**Resultado:** Se generó la estructura HTML5 inicial en `index.html`.

### Prompt 2 — Diseño visual
**Objetivo:** Agregar estilos CSS y diseño responsive.

**Resultado:** Se creó `style.css` con diseño responsive, controles, temporizador, colores, estados de interacción y mejoras básicas de accesibilidad.

### Prompt 3 — Temporizador
**Objetivo:** Implementar la cuenta regresiva y el botón Start.

**Resultado:** Se implementó el temporizador de 25 minutos utilizando JavaScript Vanilla y `setInterval`.

### Prompt 4 — Pause y Reset
**Objetivo:** Agregar los controles para pausar y reiniciar el temporizador.

**Resultado:** Se implementaron Pause y Reset manteniendo el tiempo restante al pausar y restaurando 25:00 al reiniciar.

### Prompt 5 — Ciclos Pomodoro
**Objetivo:** Implementar el cambio entre Work y Short Break.

**Resultado:** Se implementaron ciclos de 25 minutos de Work y 5 minutos de Short Break mediante `switchMode()`.

### Prompt 6 — Contador de Pomodoros
**Objetivo:** Contabilizar los ciclos de Work completados.

**Resultado:** Se agregó un contador en memoria que aumenta únicamente cuando termina un ciclo de Work.

### Prompt 7 — Notificaciones
**Objetivo:** Agregar notificaciones visuales y sonoras al finalizar cada ciclo.

**Resultado:** Se implementó una notificación visual y una alerta sonora mediante Web Audio API.

### Prompt 8 — Accesibilidad
**Objetivo:** Mejorar la accesibilidad sin modificar las funcionalidades existentes.

**Resultado:** Se agregaron atributos ARIA, roles semánticos, navegación mediante teclado, soporte para lectores de pantalla y `prefers-reduced-motion`.