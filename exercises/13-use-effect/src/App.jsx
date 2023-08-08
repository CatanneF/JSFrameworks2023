// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [character, setCharacter] = useState("")

  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState("")
  const [characterNames, setCharacterNames] = useState([])

 
  

  useEffect(() => {
    setIsLoading(true);
    // const characterUrl = `https://rickandmortyapi.com/api/character/${characterId}`
    axios("https://rickandmortyapi.com/api/character")
    .then(response => {
      setCharacterNames(response.data.results)
    })
    .catch(() => {
      setHasError(true)
    })
    .then(() => {
      setIsLoading(false)
    });
  },[])

  const fetchCharacterPage = (id) => {
    const characterPage = `https://rickandmortyapi.com/api/character/$(id)`
    axios(characterPage)
    .then(response => {
      setCharacter(response.data)
    })
    .catch(() => {
      setHasError(true)
    })
    .then(() => {
      setIsLoading(false)
    });
  }
    


  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{character.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img height="250" alt={`{character.name} image`} src={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}/>
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            {isLoading && <p>Loading...</p>}
            {hasError && (
              <div className="error" role="alert">Sorry, an error has occured</div>
            )}
            <select id="dropdown" type="text" onChange={(e) => fetchCharacterPage(e.target.value)}>
            {characterNames.map((characterName, idx) => {
              return (
                  <option value={characterName.id} key={`character-${idx}`}>{characterName.name}</option>
              )
            })}
             </select>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
