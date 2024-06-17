const inputField = document.querySelector(".input-items input");
const addItemButton = document.querySelector(".input-items button");
let unorderedlist = document.getElementById("item");
inputField.focus();

//function to add item in cart list;
addItemButton.addEventListener("click", () => {
  let inputValue = inputField.value.trim();
  if (inputValue !== "") {
    let createdList = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    span.innerHTML = `${inputValue}`;
    button.innerHTML = "X";
    createdList.appendChild(span);
    createdList.appendChild(button);
    unorderedlist.append(createdList);
    console.log(unorderedlist);
    inputField.value = "";
    inputField.focus();
    button.addEventListener("click", updateListItem);
  } else {
    console.log("blank ! input something");
  }
});

//function to delete the clicked item from kart
function updateListItem(e) {
  let delBtnLi = e.target.parentNode;
  delBtnLi.remove();
}
