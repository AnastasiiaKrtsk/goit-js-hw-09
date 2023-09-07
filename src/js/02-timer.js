// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerFields = document.querySelectorAll(
  '.value[data-days], .value[data-hours], .value[data-minutes], .value[data-seconds]'
);

let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      datetimePicker.clear();
    } else {
      startButton.removeAttribute('disabled');
    }
  },
};

const fp = flatpickr(datetimePicker, options);

function startTimer() {
  clearInterval(intervalId);
  const targetDate = fp.selectedDates[0];

  if (targetDate <= new Date()) {
    alert('Please choose a date in the future');
    return;
  }

  intervalId = setInterval(() => {
    const timeRemaining = targetDate - new Date();
    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      updateTimerFields(0, 0, 0, 0);
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeRemaining);
      updateTimerFields(days, hours, minutes, seconds);
    }
  }, 1000);
  startButton.setAttribute('disabled', 'true');
}

startButton.addEventListener('click', startTimer);

function updateTimerFields(days, hours, minutes, seconds) {
  timerFields[0].textContent = addLeadingZero(days);
  timerFields[1].textContent = addLeadingZero(hours);
  timerFields[2].textContent = addLeadingZero(minutes);
  timerFields[3].textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
