const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imageContainer = document.getElementsByClassName("images");
const images = document.getElementsByClassName("img");

let index = 0;

const changePicture = () => {
  console.log("change picture funtion clalled");
  imageContainer[0].style.transform = `translateX(${index * -1000}px)`;
};
changePicture();

// const stopAutoPlay = ()=>{
//     clearInterval(se)
// }

// function to next the image
const nextImage = () => {
  if (index == images.length - 1) {
    index = -1;
  }
  index++;
  changePicture();
};

//function to call autochange image
const autoPlayStart = setInterval(nextImage, 2000);

//if no button clicked for 20seconds start autocoursel work
setTimeout(autoPlayStart, 10000);

function clearAutoPlay() {
  clearInterval(startAutoPlay);
}

function manualNext() {
  clearInterval(autoPlayStart);
  nextImage();
}
// function to previous the image
const prevImage = () => {
  console.log("prev image called");
  clearInterval(autoPlayStart);
  if (index <= 0) {
    index = 6;
  }
  index--;
  changePicture();
};
nextBtn.addEventListener("click", manualNext);
prevBtn.addEventListener("click", prevImage);
