const pic = document.querySelector(".pic-container");
let likes = document.querySelector(".likes");
let likeCount = 0;

pic.addEventListener("dblclick", (e) => {
  insertHeart(e);
});

function insertHeart(e) {
  // getting mouse doubleClick position ralation to whole body;
  let x = e.clientX;
  let y = e.clientY;

  // geeting mouse doubleclick position outside the div
  let offsetX = e.target.offsetLeft;
  let offsetY = e.target.offsetTop;

  // finallly doubleClick position inside image div
  let insideX = x - offsetX;
  let insideY = y - offsetY;

  let heart = document.createElement("i");
  heart.classList.add("fa");
  heart.classList.add("fa-heart");
  heart.style.left = `${insideX}px`;
  heart.style.top = `${insideY}px`;

  pic.appendChild(heart);
  updateLikes();
}
function updateLikes() {
  likeCount = likeCount + 1;
  likes.innerHTML = likeCount;
}
