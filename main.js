import './style.css'
import { apiKey } from './secrets.js'
// console.log(apiKey)

const loadMovies = async (event) => {
  event.preventDefault() //override action in standard html form
  const movieTitle = document.getElementById('movieTitle').value 
  const moviePlot = document.getElementById('moviePlot').value
  // console.log(movieTitle, moviePlot)
  const urlToFetch = `https://www.omdbapi.com/?s=${movieTitle}&plot=${moviePlot}&apikey=${apiKey}`
  // console.log(urlToFetch)
  const response = await fetch(urlToFetch);
  const loadMovies = await response.json();
    // console.log(loadMovies)
  if (loadMovies.Response == "True"){
   console.log(loadMovies.Search)
  }

  const t = document.createElement('h3')
  t.textContent = loadMovies['Title'];

  // const p = document.createElement('p')
  // p.textContent = loadMovies['Plot']

  const showMovieResults = document.getElementById('showMovieResults')

  showMovieResults.appendChild(t)
  // showMovieResults.appendChild(p)
  
}

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
    searchFormElement.addEventListener('submit', loadMovies)
}

main()