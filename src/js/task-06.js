const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");
console.log(dataLength);

inputEl.addEventListener("blur", onInputCheck);

function onInputCheck(event) {
  if (event.target.value.length >= dataLength) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
}
