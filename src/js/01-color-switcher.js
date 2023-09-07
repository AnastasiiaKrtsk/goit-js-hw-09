const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let interval = null;

//*bgRandom
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`; //*insert 0 before untill 6 symbols; if already 6 nothing to do
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
