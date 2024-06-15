let toggle = document.getElementById("lines");
let navContainer = document.querySelector(".nav-container");

console.log(navContainer);

toggle.addEventListener("click", () => {
  navContainer.classList.toggle("inactive");
});
