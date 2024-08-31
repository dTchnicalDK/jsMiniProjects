const welocmeText = document.getElementById("welcome");
let text = welocmeText.innerText;
let index = 1;
let speed = 300;
welcomeAnime();
function welcomeAnime() {
  welocmeText.innerText = text.slice(0, index);
  index++;
  console.log("counting");
  if (index >= welocmeText.length) {
    index = 1;
  }
}
setTimeout(welcomeAnime, speed);
