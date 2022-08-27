
import '/style.css';


const loadMovies = async (event) => {
  // override action method in standard html form
  event.preventDefault() 

  // Pull userInput values from form
  const movieApi = document.getElementById('movieApi').value.trim();
  const movieTitle = document.getElementById('movieTitle').value.trim();
  const moviePlot = document.getElementById('moviePlot').value.trim();
  // console.log(movieTitle, moviePlot)

  // Make the call to the API with user inputs
  const urlToFetch = `https://www.omdbapi.com/?t=${movieTitle}&p=${moviePlot}&apikey=${movieApi}`
  // console.log(urlToFetch)
  const response = await fetch(urlToFetch);
  const apiResults = await response.json();
    // console.log(loadMovies)
  
  // ensures that we getting just values back
  // eslint-disable-next-line no-use-before-define
  if (apiResults.Response === "True") displayMovieDetails(apiResults.Search);

  const inputs = document.querySelectorAll('#movieApi, #movieTitle, #moviePlot')
    inputs.forEach(input => {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
    });
  
  // Append Results to HTML
  function displayMovieDetails() {
    const parent = document.getElementById('movieResults')
    
    parent.innerHTML = '';


    const poster = document.createElement('img')
    poster.src = apiResults.Poster
    poster.className = "poster-img"
    parent.appendChild(poster);
    
    const title = document.createElement('div')
    title.textContent = apiResults.Title;
    title.className = "movie-title"
    parent.appendChild(title)
    
    const movieId = document.createElement('div')
    movieId.textContent = `imdbID: ${apiResults.imdbID}`;
    movieId.className = "movie-main-details"
    movieId.id = "movie-id"
    parent.appendChild(movieId)

    const movieyr = document.createElement('div')
    movieyr.textContent = `Year: ${apiResults.Year}`;
    movieyr.className = "movie-main-details"
    movieyr.id = "year"
    parent.appendChild(movieyr)

    const rating = document.createElement('div')
    rating.textContent = `Rated: ${apiResults.Rated}`;
    rating.className = "movie-main-details"
    rating.id = "rated"
    parent.appendChild(rating)
        
    const releaseDate = document.createElement('div')
    releaseDate.textContent = `Released: ${apiResults.Released}`;
    releaseDate.className = "movie-main-details"
    releaseDate.id = "released"
    parent.appendChild(releaseDate)

    const actors = document.createElement('div')
    actors.textContent = `Actors: ${apiResults.Actors}`;
    actors.className = "movie-main-details"
    actors.id ="actors"
    parent.appendChild(actors)

    const plot = document.createElement('div')
    plot.textContent = `Plot: ${apiResults.Plot}`;
    plot.className = "plot"
    parent.appendChild(plot)
   
  }
} 

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
  searchFormElement.addEventListener('submit', loadMovies)

  document.getElementById('searchForm').addEventListener('submit', loadMovies)
}
 
main()



