let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
//console.log(decrementButton);
const incrementButton = document.querySelector('[data-action="increment"]');
//console.log(incrementButton);
const counterSpan = document.getElementById("value");
//console.log(counterSpan);

decrementButton.addEventListener("click", function () {
  counterValue--;
  counterSpan.textContent = counterValue;
  //console.log(counterValue);
});

incrementButton.addEventListener("click", function () {
  counterValue++;
  counterSpan.textContent = counterValue;
  // console.log(counterValue);
});
