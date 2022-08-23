import './style.css'
import { apiKey } from './secrets.js'
// console.log(apiKey)


//func 1 - get form values
const getUserInputs = () => {
  // const movieId = document.getElementById('movie-id')
  // const movieApi = document.getElementById('movieApiKey')
  const movieTitle = document.getElementById('movieTitle').value 
  // const movieYr = document.getElementById('movieYear')
  // const moviePlot = document.getElementById('moviePlot')
  return {
    'Title': movieTitle,
    'Plot': moviePlot,


  }
}
// console.log(getUserInputs())
const generateUrl = 
// func 2 - Call API with user input for results, take in form values 
//create app url for userinput vaules
async function makeApiCall(x) {
  const urlToFetch = generateUrl(x)
  const response = await fetch(urlToFetch)
  const apiResults = await response.json()
  return apiResults
}

//func 3 - Show API results back to user, take end results and show them 
const showResultsFromApiCall = (results) => {
  console.log(results)
  //Results in HTML
}

const submitForm = async (event) => {
  event.preventDefault() //override action in standard html form
  const userInputs = getUserInputs()
  console.log(userInputs)
  const apiResults = await makeApiCall(userInputs)
  // showResultsFromApiCall(apiResults)
}

const main = () => {
  document.getElementById('form').addEventListener('submit', submitForm)
}


main()