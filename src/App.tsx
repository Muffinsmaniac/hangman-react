import { useState } from 'react'
import Header from "./components/Header.tsx"
import Status from "./components/Status.tsx"
import Hangman from "./components/Hangman.tsx"
import Keyboard from './components/Keyboard.tsx'

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react")

  const letterElements = currentWord.split("").map( (letter,index) =>
    <span key={index}>{letter.toUpperCase()}</span>
  )
  
  return (
    <>
      <Header/>
      <Status/>
      <Hangman/>
      <div className="word-div">
        {letterElements}
      </div>
      <Keyboard/>
      <button className='newgame'>New Game</button>
    </>
  )
}

export default App
