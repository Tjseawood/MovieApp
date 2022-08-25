import './style.css'
import { apiKey } from './secrets.js'
import { doc } from 'prettier'
// console.log(apiKey)

const loadMovies = async (event) => {
  //override action method in standard html form
  event.preventDefault() 

  // Pull userInput values from form
  const movieApi = document.getElementById('movieApi').value.trim();
  const movieTitle = document.getElementById('movieTitle').value.trim();
  const moviePlot = document.getElementById('moviePlot').value.trim();
  // console.log(movieTitle, moviePlot)

  //Make the call to the API with user inputs
  const urlToFetch = `https://www.omdbapi.com/?t=${movieTitle}&p=${moviePlot}&apikey=${apiKey}`
  // console.log(urlToFetch)
  const response = await fetch(urlToFetch);
  const apiResults = await response.json();
    // console.log(loadMovies)
  
  //ensures that we getting just values back
  if (apiResults.Response == "True") displayMovieDetails(apiResults.Search);

  //Append Results to HTML
  function displayMovieDetails() {
    const parent = document.getElementById('movieResults')
    
    const title = document.createElement('div')
    title.textContent = apiResults['Title'];
    title.className = "movie-title"
    parent.appendChild(title)
    
    const movieyr = document.createElement('p')
    movieyr.textContent = `Year: ${apiResults['Year']}`;
    movieyr.className = "year"
    parent.appendChild(movieyr)

    const movieId = document.createElement('div')
    movieId.textContent = `imdbID: ${apiResults['imdbID']}`;
    movieId.className = "movie-id"
    parent.appendChild(movieId)

    const plot = document.createElement('div')
    plot.textContent = `Plot: ${apiResults['Plot']}`;
    plot.className = "plot"
    parent.appendChild(plot)
   
    const rating = document.createElement('div')
    rating.textContent = `Rated: ${apiResults['Rated']}`;
    rating.className = "rated"
    parent.appendChild(rating)
    
    const releaseDate = document.createElement('div')
    releaseDate.textContent = `Released: ${apiResults['Released']}`;
    releaseDate.className = "released"
    parent.appendChild(releaseDate)
    
    const poster = document.createElement('img')
    poster.src = apiResults['Poster']
    poster.className = "poster-img"
    parent.appendChild(poster);
  }
} 

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
    searchFormElement.addEventListener('submit', loadMovies)
}

main()