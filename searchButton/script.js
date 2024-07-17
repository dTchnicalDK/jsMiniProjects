let serachField = document.querySelector("input");
let searchButton = document.getElementById("search");

searchButton.addEventListener("click", () => {
  searchButton.classList.toggle("active");
  serachField.classList.toggle("active");
  if (serachField.classList == "active") {
    serachField.focus();
  }
});
console.log(searchButton);
