const totalcharEl = document.querySelector(".total-digit");
const remainingcharEl = document.querySelector(".remaining-digit");
const inputcharEl = document.querySelector(".textarea");

inputcharEl.addEventListener("keyup", () => {
  updateCounter();
});
updateCounter();

function updateCounter() {
  totalcharEl.innerText = inputcharEl.value.length;
  remainingcharEl.innerText =
    inputcharEl.getAttribute("maxLength") - totalcharEl.innerText;
}
