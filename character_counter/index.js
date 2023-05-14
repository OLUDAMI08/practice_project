const totalcharEl = document.querySelector(".total-digit");
const remainingcharEl = document.querySelector(".remaining-digit");
const inputcharEl = document.querySelector(".textarea");

inputcharEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalcharEl.innerText = inputcharEl.value.length;
  remainingcharEl.innerText = 50 - totalcharEl.innerText;
}
