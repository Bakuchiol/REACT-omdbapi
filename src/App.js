import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay';

function App() {
  // 1. api key data
  const apiKey = '6cfb8a83'

  // 2. set state
  const [movie, setMovie] = useState("")

  // 3. get movie- function that uses async-await to fetch movie data
  const getMovie = async(searchTerm)=> {
    // await, fetch the API, string interpolation
    // goes to site and searches for the title
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      )

    //  gets the response and .json is format of data
    // waits are like pause - gets response(info) and turns it into json
    const data = await response.json()
    // take retrieved data and set it as current movie
    setMovie(data)

  }

  // useEffect
  // starts of as Clueless; if different value, rerenders afain
  useEffect(() => {
    getMovie('Clueless')
  }, [])


  return (
    <div className="App">
      {/* pass getMovie to enable  */}
      <Form movieSearch={getMovie}/>

      <MovieDisplay movie={movie}/>
      
    </div>
  );
}

export default App;
