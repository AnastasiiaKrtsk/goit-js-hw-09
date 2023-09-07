const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, Number(delayInput.value));
  });
}
form.addEventListener('submit', async event => {
  event.preventDefault();

  const initialDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = initialDelay + step * i;

    try {
      const result = await createPromise(position, delay);
      console.log(
        `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
      );
    } catch (error) {
      console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
    }
  }
});
