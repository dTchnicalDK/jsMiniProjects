let left = document.querySelector(".split.left");
let right = document.querySelector(".split.right");
let container = document.querySelector(".container");
let VotedTo = document.querySelector(".votedTo");
let VotedToRight = document.querySelector(".votedToRight");
let butttonLeft = document.querySelector("button.left");
let butttonRight = document.querySelector("button.right");

console.log(butttonLeft);
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

butttonLeft.addEventListener("click", () => {
  VotedTo.innerText = "Bjp Thanks for ur vote";
  //   butttonRight.disabled = true;
  butttonRight.remove();
});
butttonRight.addEventListener("click", () => {
  VotedToRight.innerText = "congress thanks for ur vote";
  //   butttonLeft.disabled = true;
  butttonLeft.remove();
});
