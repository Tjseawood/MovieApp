import './style.css'
import { apiKey } from './secrets.js'
// console.log(apiKey)

const submitForm = async (event) => {
  event.preventDefault() //override action in standard html form
  const movieTitle = document.getElementById('movieTitle').value 
  const moviePlot = document.getElementById('moviePlot').value
  // const userInputs = {
  //   'Title': movieTitle,
  //   'Plot': moviePlot,
  // }
  console.log(movieTitle, moviePlot)
  //Todo: Define generateUrl eventually
  const urlToFetch = `https://www.omdbapi.com/?t=${movieTitle}&plot=${moviePlot}&apikey=${apiKey}`
  console.log(urlToFetch)
  const response = await fetch(urlToFetch)
  const apiResults = await response.json()

  console.log(apiResults)

  const movieDetails = document.createElement('h1')
  movieDetails.textContent = apiResults['Title'];
  
  const returnMoviePlot = document.createElement('p')
  movieDetails.textContent = apiResults['Plot'];

  const parent = document.getElementById('results')
  parent.appendChild(movieDetails)

  parent.document.getElementById('results')
  parent.appendChild(movieDetails)
}

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
    searchFormElement.addEventListener('submit', submitForm)
}

main()