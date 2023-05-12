const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.querySelector(".question");
questionEl.innerHTML = `What is ${num1} Multiply by ${num2}?`;
finalScoreEl = document.querySelector(".score");
const formEl = document.querySelector(".form");
const ansIn = document.querySelector(".input");
const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
formEl.addEventListener("submit", () => {
  //   event.preventDefault();
  const userAns = +ansIn.value;
  if (correctAns === userAns) {
    score += 1;
    updateStorage();
    console.log(score);
  } else {
    score--;
    updateStorage();
  }
});
function updateStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
finalScoreEl.innerHTML = `Score ${score}`;
