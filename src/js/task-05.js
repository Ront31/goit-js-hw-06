const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if ((spanEl.textContent = "")) {
    return (spanEl.textContent = "Anonymous");
  } else {
    return (spanEl.textContent = event.currentTarget.value);
  }
});
