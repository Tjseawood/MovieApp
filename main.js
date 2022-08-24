import './style.css'
import { apiKey } from './secrets.js'
import { doc } from 'prettier'
// console.log(apiKey)

const loadMovies = async (event) => {
  //override action in standard html form
  event.preventDefault() 

  // Pull userInput values from form
  const movieTitle = document.getElementById('movieTitle').value 
  const moviePlot = document.getElementById('moviePlot').value
  // console.log(movieTitle, moviePlot)

  //Make the call to the API with user inputs
  const urlToFetch = `https://www.omdbapi.com/?t=${movieTitle}&plot=${moviePlot}&apikey=${apiKey}`
  // console.log(urlToFetch)
  const response = await fetch(urlToFetch);
  const apiResults = await response.json();
    // console.log(loadMovies)
  
  //ensures that we getting search results back
  if (apiResults.Response == "True"){
   console.log(apiResults.Search)
  }

  //Append Results to HTML
  const title = document.createElement('h1')
  title.textContent = apiResults['Title'];

  const movieyr = document.createElement('div')
  movieyr.textContent = apiResults['Year']

  const plot = document.createElement('p')
  plot.textContent = apiResults['Plot']

  const poster = document.createElement('img')
  poster.src = apiResults['Poster']

  const rating = document.createElement('p')
  rating.textContent= apiResults['Rated']

  const releaseDate = document.createElement('div')
  releaseDate.textContent = apiResults['Released']

  const parent = document.getElementById('movieResults')
  parent.appendChild(title)
  parent.appendChild(movieyr)
  parent.appendChild(rating)
  parent.appendChild(releaseDate)
  parent.appendChild(plot)
  parent.appendChild(poster)

}

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
    searchFormElement.addEventListener('submit', loadMovies)
}

main()