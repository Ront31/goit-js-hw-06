const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const liElCreate = document.createElement("li");
  liElCreate.textContent = ingredients[i];
  liElCreate.classList.add("item");
  ulEl.append(liElCreate);
}
