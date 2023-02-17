const inputEl = document.querySelector("#validation-input");
const dataLength = document.querySelector("[data-length = '6']");
console.log(dataLength);

const Valid = document.querySelector("validation-input.valid");
console.log(Valid);

inputEl.addEventListener("blur", onInputCheck);

function onInputCheck(event) {
  if (inputEl.value.length >= 6) {
    inputEl.style.borderColor = Valid;
  }
}
