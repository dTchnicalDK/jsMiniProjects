let icons = document.querySelectorAll(".icon");
console.log(icons);

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.parentElement.parentElement.classList.toggle("active");
  });
});
