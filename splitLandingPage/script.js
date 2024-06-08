let left = document.querySelector(".split.left");
let right = document.querySelector(".split.right");
let container = document.querySelector(".container");

// console.log(container);
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseout", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseout", () =>
  container.classList.remove("hover-right")
);
