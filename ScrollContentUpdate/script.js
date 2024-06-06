const boxes = document.querySelectorAll(".box");

function scrollMagic() {
  //getting height of the screen
  let innnerHeight = window.innerHeight;
  boxes.forEach((box) => {
    //getting box bottom line loacation measurement;
    const boxTop = box.getBoundingClientRect().bottom;
    //deciding when the box to appear or disappear
    if (boxTop < innnerHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
scrollMagic();
window.addEventListener("scroll", scrollMagic);
