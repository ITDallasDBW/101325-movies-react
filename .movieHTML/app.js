console.log("js is connected");

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

//ELEMENTS TO/FROM HTML
const toHome = document.querySelector(".homeLink");
const resultsRow = document.querySelector(".row");
const moviesWrapper = document.querySelector(".results");
const searchResults = document.querySelector(".searchResults");
const loadState = document.querySelector(".loading");
const movieDescription = document.querySelector(".movie__description");

//Global variable (so don't have to use localStorage)
let currentMovies = [];
let currentImdbID;
let plotData;
let searchData;

// Event Listeners: Load, Click, Enter
const movieIdBox = document.getElementById("idBox");
const movieIdBtn = document.getElementById("idBtn");
// Focus on search window on load
window.addEventListener("load", () => {
  idBox.focus();
});
//Click = Enter
movieIdBtn.addEventListener("click", clickHandlerFn);
movieIdBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") clickHandlerFn();
});

function clickHandlerFn() {
  //What the listeners do...
  searchData = movieIdBox.value;
  if (!movieIdBox.value) {
    showMessage(`Please enter a movie to search.`, "failure");
    return newSearch();
  }
  // send user input to fetchData API call and display on results page
  fetchData(searchData);
  displaySearchTerm(searchData);
}

function resetHome() {
  location.reload(true);
}

function newSearch() {
  //Reset to focused, blank searchbox and remove any prev results
  movieIdBox.value = "";
  idBox.focus();
  moviesWrapper.innerHTML = "";
  resultsRow.classList.add("hidden");
}

//CALLING API/REQUESTING DATA AND ORGANIZING RESPONSE

async function fetchData(searchTerm) {
  newSearch();
  //erase potentially previous results

  loadState.classList.remove("hide__spinner");
  //Begin skeleton load state
  const res = await fetch(
    `${BASE_URL}?s=${searchTerm}&plot=full&apikey=${API_KEY}`
  );
  //Initiate API call

  const data = await res.json();
  //manage response from API
  console.log(data);

  //There are no usable results from API:
  if (!data.Search) {
    newSearch();
  }

  loadState.classList.add("hide__spinner");
  //end skeleton load state
  if (data.Response === "False") {
    //API responds that credential is inadequate:
    if (res.status === 401) {
      showMessage(`OMDB API keys are free. You should use one.`, "failure");
    } else {
      return showMessage(
        `There's no record of <span class="italic">THAT</span> movie`,
        "failure"
      );
    }
  }
  currentMovies = data.Search;

  //new var for usable API data with API specific .Search
  displayMovies(currentMovies);
  //send displayable data to display function
  showMessage(`We found <span class="italic">THAT</span> movie`, "success");
  //Advise user of successful data retrieval
}

//Elements t/f HTML for success, error messages
//****should these be declared down here or at the top? */
const messageBox = document.querySelector(".message-box");
const messageText = document.querySelector(".message-text");

//function to display messages
function showMessage(message, type) {
  messageText.innerHTML = message;
  //****should these variables be global? Declare at top? */
  const styles = { 
    success: { bg: "green", border: "rgb(0, 0, 85)", text: "rgb(241, 232, 180)" },
    failure: { bg: "red", border: "rgb(0, 0, 85)", text: "rgb(0, 0, 85)" },
  }[type];
  messageBox.style.cssText = `
        background-color: ${styles.bg};
        border: 3px solid ${styles.border};
        color: ${styles.text};
        `;
  messageBox.classList.remove("hidden");
  setTimeout(() => messageBox.classList.add("hidden"), 3000);
  //*******Why does this sometimes timeout early? */
}

const resultsMessage = document.querySelector(".results__message");
let defaultResultsMessage = resultsMessage.innerHTML;

function displaySearchTerm(searchData) {
  resultsMessage.innerHTML = `<h3 class="results__message">What we found for <span class="glow italic">${searchData}</span>:</h3>`;
}

//DISPLAYING MOVIES
function displayMovies(movieList) {
  resultsRow.classList.remove("hidden");
  moviesWrapper.innerHTML = movieList
    .slice(0, 6)
    .map((movie) => {
      currentImdbID = movie.imdbID;
      return `
      <div class="movie">
        <div class="posterWrapper">
          <figure>
            <img src="${movie.Poster}" class="poster">
            <div class="coverPoster"></div>
          </figure>
          <div class="movie__description">
            <h2 class="movie__title">${movie.Title}</h2>
            <div>
              <p class="movie__details">Released ${movie.Year}</p>
              <p class="movie__details">IMDB ID: ${movie.imdbID}</p>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

//SORTING MOVIES
function sortChange(event) {
  const sortOption = event.target.value;
  let sortedMovies = [...currentMovies];

  if (sortOption === "A_Z") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortOption === "Z_A") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (sortOption === "LOW_TO_HIGH") {
    sortedMovies.sort((a, b) => a.Year - b.Year);
  } else if (sortOption === "HIGH_TO_LOW") {
    sortedMovies.sort((a, b) => b.Year - a.Year);
  }
  displayMovies(sortedMovies);
}


// Did not use:
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function run() {
//   //admire the lovely loading state
//   console.log("run");
//   await delay(5000); // Wait
// }