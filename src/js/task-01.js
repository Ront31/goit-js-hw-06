const liElLength = document.querySelectorAll(".item");
console.log(`Number of categories: ${liElLength.length}`);

for (let index = 0; index < liElLength.length; index++) {
  console.log(`Category: ${liElLength[index].children[0].textContent}`);
  console.log(`Elements: ${liElLength[index].children[1].children.length}`);
}
