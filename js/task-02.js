"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector("#ingredients");
const markup = ingredients.map((item) => {
  const liElement = document.createElement("li");
  liElement.textContent = item;
  liElement.classList = "item";
  console.log(liElement);
  return liElement;
});
console.log(markup);
container.append(...markup);
console.dir(container);
