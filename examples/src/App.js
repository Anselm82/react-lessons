// Imports
import { useEffect, useState } from "react";
import "./App.css"

import Header from "./components/Header"
import CharacterList from "./components/CharacterList"

import useFetch from "./hooks/useFetch"
import AddCharacterContext from "./contexts/AddCharacterContext"

// Function
const App = () => {
  // Private states & functions
  const [maximum, setMaximum] = useState(0)
  const increaseMaximum = () => setMaximum(maximum+1)
  
  // Initialize data
  const titleApp = "Feliz Día de Goku"
  
  // Retrieve data
  const [
    characters,
    setCharacters,
    loadingCharacters,
    errorCharacters
  ] = useFetch("https://jsonplaceholder.typicode.com/users")
  
  return (
    <div>
      <Header
        titleApp={titleApp}
        maximum={maximum}
        increaseMaximum={increaseMaximum}
      />

      <hr />
      
      <AddCharacterContext.Provider value={{
        characters,
        setCharacters,
        loadingCharacters,
        errorCharacters
      }}>
        <CharacterList />
      </AddCharacterContext.Provider>
    </div>
  )
}

// Exports
export default App