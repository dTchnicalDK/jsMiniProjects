let jokeBtn = document.getElementById("jokeBtn");
let joke = document.getElementById("joke");

let jokeUrl = "https://icanhazdadjoke.com/";
let config = { headers: { Accept: "application/json" } };

retrieveJoke();
jokeBtn.addEventListener("click", retrieveJoke);

function retrieveJoke() {
  try {
    fetch(jokeUrl, config)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        joke.innerHTML = data.joke;
      });
  } catch (error) {
    console.log(`error is ${error}`);
  }
}
