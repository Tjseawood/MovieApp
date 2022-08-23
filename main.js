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

  console.log(loadMovies.Search)

  // const t = document.createElement('h1')
  // t.textContent = apiResults['Title'];

  // const p = document.createElement('p')
  // p.textContent = apiResults['Plot']

  // const ps = document.createElement('img')
  // ps.textContent = apiResults['Poster']

  // const r = document.createElement('p')
  // r.textContent = apiResults['Rated']

  // const showMovieResults = document.getElementById('showMovieResults')

  // showMovieResults.appendChild(t)
  // showMovieResults.appendChild(p)
  // showMovieResults.appendChild(r)
  // showMovieResults.appendChild(ps)
  
}

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
    searchFormElement.addEventListener('submit', loadMovies)
}

main()