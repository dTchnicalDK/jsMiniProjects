let textArea = document.getElementById("textArea");
let tags = document.querySelector(".tags");
// console.log(tags);

textArea.addEventListener("keyup", ElementCreation);

function ElementCreation(input) {
  let inputValue = input.target.value
    .split(",")
    .filter((word) => word.trim() != "")
    .map((tag) => tag.trim());
  tags.innerHTML = "";
  inputValue.forEach((el) => {
    let tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = el;
    tags.appendChild(tagEl);
  });
}
