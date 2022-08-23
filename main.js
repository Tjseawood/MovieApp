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
  const urlToFetch = `http://www.omdbapi.com/?t=${movieTitle}&plot=${moviePlot}&apikey=${apiKey}`
  console.log(urlToFetch)
  const response = await fetch(urlToFetch)
  const apiResults = await response.json()

  console.log(apiResults)
 

}

const main = async () => {
  const searchFormElement = document.getElementById('searchForm')
    searchFormElement.addEventListener('submit', submitForm)
}

main()