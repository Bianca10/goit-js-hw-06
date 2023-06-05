const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liEl = document.createElement("ul");
//console.log(liEl);
for (const ingredient of ingredients) {
  // console.log(ingredient);
  const list = document.createElement("li");
  // console.log(list);
  list.textContent = ingredient;
  list.classList.add("item");
  liEl.append(list);
}
console.log(liEl);
