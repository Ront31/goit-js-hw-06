const liElLength = document.querySelectorAll(".item");
console.log(`Number of categories: ${liElLength.length}`);

liElLength.forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].children.length}`);
});

// for (let index = 0; index < liElLength.length; index++) {
//   console.log(`Category: ${liElLength[index].children[0].textContent}`);
//   console.log(`Elements: ${liElLength[index].children[1].children.length}`);
// }
