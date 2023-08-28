"use strict";
let counterValue = 0;
const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');
const initialValue = document.getElementById("value");

plus.addEventListener("click", function () {
  counterValue += 1;
  initialValue.textContent = counterValue;
});
minus.addEventListener("click", function () {
  counterValue -= 1;
  initialValue.textContent = counterValue;
});
