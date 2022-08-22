import './style.css'
import { apiKey } from './secrets.js'
console.log(apiKey)


//func 1 - get form values
const getUserInput = () => {
  const movieId = document.getElementById('movie-id')
  const movieApi = document.getElementById('movieApiKey')
  const movieTitle = document.getElementById('movieTitle')
  const movieYr = document.getElementById('movieYear')
  const moviePlot = document.getElementById('moviePlot')
  
}
console.log(getFormValues)

//func 2 - Call API with user input for results, take in form values 

async function makeApiCall(userInputs) {
  const urlToFetch = getUserInput
  const response = await fetch(urlToFetch)
  const apiResults = await response.json()
  return apiResults
}


//func 3 - Show API results back to user, take end results and show them 
const showResults = (results) => {
  console.log(results)
  //Results in HTML
}


const main = () => {
  const formValues  = getFormValues()
  const apiResults =  getResults(formValues)
  showResults(apiResults)
}


main()