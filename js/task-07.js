"use strict";
const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const initialFontSize = range.value + "px";
text.style.fontSize = initialFontSize;

range.addEventListener("input", onChange);
function onChange(event) {
  const fontSize = range.value + "px";
  text.style.fontSize = fontSize;
}
