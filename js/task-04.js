// const btnDecrement = document.querySelector('.decrement') 
// const btnIncrement = document.querySelector('.increment') 
// console.log(btnDecrement)
// console.log(btnIncrement)


// let counterValue = 0;
// const btnDecrement = document.querySelector("button[data-action='decrement']");
// const btnIncrement = document.querySelector("button[data-action='increment']");
// const myValue = document.querySelector("#value");

// const countBtnDecrement = function() {
//   counterValue -= 1;
//   myValue.textContent = counterValue;
// };

// const countBtnIncrement = function() {
//   counterValue += 1;
//   myValue.textContent = counterValue;
// };

// decr.addEventListener("click", countDecr);
// incr.addEventListener("click", countIncr);


let counterValue = document.querySelector('#value');

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);