let OMDB_URL = " http://www.omdbapi.com/?s=man&apikey=cc0661a6";
// let OMDB_URL = " http://www.omdbapi.com/?plot=short&apikey=cc0661a6";

async function fetchData() {
  const response = await fetch(OMDB_URL);
  const data = await response.json();
  const result = data.Search;
  result.forEach((element) => {
    // console.log(element);
    updateDom(element);
  });
}
function updateDom(movie) {
  const { Title, Poster } = movie;
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  console.log(movieDiv);
}
