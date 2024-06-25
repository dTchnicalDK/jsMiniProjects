let OMDB_URL = " http://www.omdbapi.com/?s=hard&apikey=cc0661a6";
let OMDB_SEARCH_URL = " http://www.omdbapi.com/?s=man&apikey=cc0661a6";
// let OMDB_URL = " http://www.omdbapi.com/?plot=short&apikey=cc0661a6";
//spiderman: far from home, superman: vs batman dawn of justice;
const mainDiv = document.querySelector(".main");
const searchField = document.querySelector("#search-field");
const findButton = document.querySelector("#find");
const searchIcon = document.querySelector(".search-icon");

fetchData();
async function fetchData() {
  const response = await fetch(OMDB_URL);
  const data = await response.json();
  const result = data.Search;
  updateDom(result);
}
function updateDom(result) {
  mainDiv.innerHTML = "";
  result.forEach((movie) => {
    const { Title, Poster, Year } = movie;
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    mainDiv.appendChild(movieDiv);

    movieDiv.innerHTML = `
    
            <img
              src=${Poster}
              alt="movie poster"
              id="image"
            />
            <div class="title-n-rating">
              <h3 class="title">${Title}</h3>
              <span id="rating">${Year}</span>
            </div>
            <div class="movie-info">
              <h3>storyLine</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, commodi explicabo. Praesentium quidem libero deleniti
                labore, sapiente natus nesciunt iusto at saepe, ut culpa incidunt
                esse illo maiores quae odio? Molestias, quibusdam. Eius,
                repudiandae impedit doloremque necessitatibus ipsum neque labore?
              </p>
            </div>
          
    `;
    // console.log(movieDiv);
    // }
  });
}

searchIcon.addEventListener("click", () => {
  if (searchField.value && searchField.value !== " ") {
    const seachTerm = searchField.value;
    fetch(` http://www.omdbapi.com/?s=${seachTerm}&apikey=cc0661a6 `)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const searchMovieData = data.Search;
        updateDom(searchMovieData);
      })
      .catch((e) => console.log(e));
  }
});
