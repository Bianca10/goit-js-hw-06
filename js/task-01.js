"use strict";

const categorysList = document.getElementById("categories");
//console.log(categorysList);
const categoryItems = categorysList.getElementsByClassName("item");
console.log("Number of categories:", categoryItems.length);

for (const categoryItem of categoryItems) {
  const categoryTitle = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");

  console.log("Category:", categoryTitle.textContent);
  console.log("Elements:", categoryElements.length);
}
