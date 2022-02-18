let stateTimer = false;

const domMin = document.getElementById('minutes');
const domSec = document.getElementById('seconds');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const minutes = 3;
const seconds = 0;

if (minutes < 10) {
  domMin.innerHTML = `0${minutes}`;
} else {
  domMin.innerHTML = minutes;
}

if (seconds < 10) {
  domSec.innerHTML = `0${seconds}`;
} else {
  domSec.innerHTML = seconds;
}