const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let interval = null;

//*bgRandom
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

//*bg
function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

//*startBtn
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  interval = setInterval(changeBgColor, 1000);
});

//*stopBtn
stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  clearInterval(interval);
});
