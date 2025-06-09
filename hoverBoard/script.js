const boxContainer = document.getElementById("boxes");
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "crimson",
  "salmon",
  "orange",
];

// Creating boxes (using DocumentFragment for performance)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1400; i++) {
  const box = document.createElement("li");
  box.className = "box";
  box.addEventListener("mouseenter", (e) => {
    e.target.classList.remove("mouse-out");
    box.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
  box.addEventListener("mouseleave", (e) => {
    e.target.classList.add("mouse-out");
  });
  fragment.appendChild(box);
}
boxContainer.appendChild(fragment);
