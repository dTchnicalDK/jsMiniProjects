let image = document.querySelector(".bg");
let loadingText = document.querySelector(".loading-text");

let percentage = 1;
function percentageImcrement() {
  percentage++;
  if (percentage > 99) {
    clearInterval(interval);
  }
  loadingText.innerHTML = `${percentage} %`;
  image.style.filter = `blur(${scale(percentage, 1, 100, 30, 0)}px)`;
  loadingText.style.opacity = scale(percentage, 1, 100, 1, 0);
}
let interval = setInterval(percentageImcrement, 30);

//function to map a range of number with other range of number
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
