const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  startTime = new Date() - elapsedTime;
  timer = setInterval(update, 10);
  isRunning = true;
  document.getElementById("startBtn").disabled = true;
  document.getElementById("startBtn").style.backgroundColor = "#0ab82a";
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    document.getElementById("startBtn").disabled = false;
    document.getElementById("startBtn").style.backgroundColor = "#0bda31";
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
  document.getElementById("startBtn").disabled = false;
  document.getElementById("startBtn").style.backgroundColor = "#0bda31";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliSeconds = String(milliSeconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}
