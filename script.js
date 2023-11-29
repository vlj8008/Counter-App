const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEL = document.querySelector(".counter__button--decrease");
const resetIconEl = document.querySelector(".counter__reset-icon");
const counterEl = document.querySelector(".counter");

decreaseButtonEL.addEventListener("click",()=> {
  //get current value
  const currentValue = counterValueEl.textContent;
  //convert to number type - unary operator.
  const currentValueAsNumber = +currentValue;
  // Minus one from it
  let displayNumber = currentValue - 1;

  if (displayNumber < 0) {
    displayNumber = 0;
  }
  counterValueEl.textContent = displayNumber;
});
const incrementCounter = ()=> {
  //get current value of counter
  const currentValue = counterValueEl.textContent;
  //convert value to number type (using unary operator)
  const currentValueAsNumber = +currentValue;
  //increment by 1
  let displayNumber = currentValueAsNumber + 1;

  if (displayNumber > 5) {
    counterTitleEl.textContent = "Limit reached. You need to buy professional";
    displayNumber = 5;
    counterEl.classList.add("counter--limit");
    increaseButtonEl.disabled = true;
    decreaseButtonEL.disabled = true;

    //increaseButtonEl.disabled = true;
  }
  counterValueEl.textContent = displayNumber;
}

increaseButtonEl.addEventListener("click", incrementCounter);

document.addEventListener("keydown", incrementCounter);

resetIconEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter--limit");
  increaseButtonEl.disabled = false;
  decreaseButtonEL.disabled = false;
  counterTitleEl.textContent = "Fancy Counter";
});
