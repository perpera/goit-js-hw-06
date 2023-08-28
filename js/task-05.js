"use strict";
const inputField = document.querySelector("#name-input");
const username = document.querySelector("#name-output");

inputField.addEventListener("input", onInputChange);

function onInputChange(event) {
  const initialValue = event.currentTarget.value;
  username.textContent = initialValue === "" ? "Anonymus" : initialValue;
}
