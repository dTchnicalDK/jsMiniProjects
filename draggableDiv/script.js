const dragbleImage = document.querySelector(".filled");
const blankBoxes = document.querySelectorAll(".blank");
// console.log(blankBoxes);

dragbleImage.addEventListener("dragstart", dragStart);
dragbleImage.addEventListener("dragend", dragEnds);

blankBoxes.forEach(function (box) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

function dragStart() {
  this.classList += " drag-hold";
  //   setTimeout(() => {
  //     this.className = "invisible";
  //   }, 0);
}
function dragEnds() {
  this.classList = "filled";
}
function dragEnter(e) {
  e.preventDefault();
  //   this.classList.add("drag-over");
}
function dragLeave() {
  this.classList.remove("drag-over");
}
function dragOver(e) {
  e.preventDefault();
  this.classList.add("drag-over");
}
function drop() {
  this.classList = "nothing";
  this.appendChild(dragbleImage);
}
