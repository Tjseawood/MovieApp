import './style.css'
import { apiKey } from './secrets.js'
console.log(apiKey)


//func 1 - get form values
const getFormValues = () => {
   //Get userInput from form
  const movieId = document.getElementById('movie-id')
  const movieTitle = document.getElementById('title')
  const movieYear = document.getElementById('year')
  const moviePlot = document.getElementById('plot')
  const apiKey = document.getElementById('apiKey')
  }

//func 2 - Call API with user input for results, take in form values 

const getResults = () => {
  const mockResults = {
    Title: "James Bond",
    Year: "2015",
    Rated: "N/A",
    Released: "24 Jul 2015",
    Runtime: "142 min",
    Genre: "Action, Comedy",
    Director: "Sai Kishore Macha",
    Writer: "Shyam Ch, Gopimohan, Sai Kishore Macha",
    Actors: "Allari Naresh, Sakshi Chaudhary, Raghu Babu",
    Plot: "A down-to-earth software employee marries a lady without knowing about her past and criminal activities. Halfway through his marriage, he finds out her background and decides to run away, but ultimately comes to terms with his pro...",
    Language: "Telugu",
    Country: "India",
    Awards: "N/A",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2IwZDRiOTAtNTUxOC00ZWQxLThlYTYtZTM2NTRmMjEzNmQwXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_SX300.jpg",
    Ratings: [
    {
    Source: "Internet Movie Database",
    Value: "5.5/10"
    }
    ],
    Metascore: "N/A",
    imdbRating: "5.5",
    imdbVotes: "241",
    imdbID: "tt4896340",
    Type: "movie",
    DVD: "02 Aug 2018",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  }
  return mockResults
}


// //func 3 - Show API results back to user, take end results and show them 
const showResults = (results) => {
  console.log(results)
  //Results in HTML
}


const main = () => {
  const formValues  = getFormValues()
  const apiResults =  getResults(formValues)
  showResults(apiResults)
}

// main()