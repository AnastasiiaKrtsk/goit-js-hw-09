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
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const initialDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const delay = initialDelay + (i - 1) * step;

    createPromise(position, delay)
      .then(result => {
        console.log(
          `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
        );
      })
      .catch(error => {
        console.log(
          `❌ Rejected promise ${error.position} in ${error.delay}ms`
        );
      });
  }
});

// const promisesFormEl = document.querySelector('.form');

// const createPromise = (position, delay) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shoultResolve = Math.random() > 0.3;
//       if (shoultResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
//   return promise;
// };

// const onPromisesFormElSubmit = event => {
//   event.preventDefault();

//   const amount = Number(event.target.elements.amount.value);
//   const delay = Number(event.target.elements.delay.value);
//   const step = Number(event.target.elements.step.value);

//   for (let i = 1; i <= amount; i++) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         console.log(
//           `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         console.log(
//           `❌ Rejected promise ${error.position} in ${error.delay}ms`
//         );
//       });
//     delay += step;
//   }
// };

// promisesFormEl.addEventListener('submit', onPromisesFormElSubmit);
