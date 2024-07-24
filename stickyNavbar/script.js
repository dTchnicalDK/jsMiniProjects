const navBar = document.querySelector(".nav");
const container = document.querySelector(".nav .container");

addEventListener("scroll", customiseNav);

function customiseNav() {
  if (scrollY > container.offsetHeight + 200) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}
