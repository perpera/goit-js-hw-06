"use strict";
const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", onFocusChange);

function onFocusChange(event) {
  const reqNumOfSymbols = inputField.dataset.length;
  const inputSymbols = inputField.value.trim().length;

  if (inputSymbols === Number(reqNumOfSymbols)) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
}
