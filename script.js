const domMin = document.getElementById('minutes');
const domSec = document.getElementById('seconds');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let originalMinutes = 25;
let originalSeconds = 0;
let minutes = originalMinutes;
let seconds = originalSeconds;

start.disabled = false;
pause.disabled = true;
reset.disabled = true;

domMin.textContent = twoNumbers(originalMinutes);
domSec.textContent = twoNumbers(originalSeconds);

function startTimer(min, sec) {
  let interval = setInterval(() => {
    if (sec === 0) {
      if (min === 0) {
        clearInterval(interval);
        start.disabled = false;

        minutes = minutes;
        seconds = seconds;
        return;
      }
      min--;
      sec = 59;
    }
    sec--;
    domMin.textContent = twoNumbers(min);
    domSec.textContent = twoNumbers(sec);

    pause.addEventListener('click', () => {
      start.disabled = false;
      pause.disabled = true;
      reset.disabled = false;
      clearInterval(interval);
      minutes = min;
      seconds = sec;
    });

    reset.addEventListener('click', () => {
      start.disabled = false;
      pause.disabled = true;
      reset.disabled = true;
      clearInterval(interval);
      domMin.textContent = twoNumbers(originalMinutes);
      domSec.textContent = twoNumbers(originalSeconds);
    });
  }, 1000);
}

function twoNumbers(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

start.addEventListener('click', () => {
  start.disabled = true;
  pause.disabled = false;
  reset.disabled = false;
  startTimer(minutes, seconds);
});