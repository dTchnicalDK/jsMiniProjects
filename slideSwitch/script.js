const selectBoxes = document.querySelectorAll(".select");
const wealthy = document.querySelector("#wealthy");
const fit = document.querySelector("#fit");
const caring = document.querySelector("#caring");

selectBoxes.forEach((selectBox) => {
  selectBox.addEventListener("change", (e) => doTheMagic(e.target));
});
function doTheMagic(element) {
  if (wealthy.checked && fit.checked && caring.checked) {
    if (element.checked === wealthy.checked && caring.checked === true) {
      fit.checked = false;
    }
    if (element.checked === fit.checked && wealthy.checked === true) {
      caring.checked = false;
    }
    if (element.checked === caring.checked && fit.checked === true) {
      wealthy.checked = false;
    }
  }
}
