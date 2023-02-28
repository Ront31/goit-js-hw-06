const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const liArray = [];

ingredients.forEach((el) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = el;
  liArray.push(item);
});

ulEl.append(...liArray);
