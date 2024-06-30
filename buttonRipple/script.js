const buttonDiv = document.querySelector(".button-div");
console.log(buttonDiv);

buttonDiv.addEventListener("click", expand2Ripple);
function expand2Ripple() {
  buttonDiv.classList.add("active");
  setTimeout(removeEffect, 900);
}
function removeEffect() {
  buttonDiv.classList.remove("active");
}
