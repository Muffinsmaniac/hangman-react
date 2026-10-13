import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Hangman from './components/Hangman'
import Keyboard from './components/Keyboard'

function App() {
  //Variables
  const [currentWord, setCurrentWord] = useState<string>("react")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log(guessedLetters)

  //Elements 
  const letterElements = currentWord.split("").map( (letter,index) =>
    <span key={index}>{letter.toUpperCase()}</span>
  )
  
  //Functions
  function addGuessedLetter(letter:string){    
    setGuessedLetters(prevLetters => {
      return prevLetters.includes(letter) ? [...prevLetters] : [...prevLetters, letter];
    })    
  }

  return (
    <>
      <Header/>
      <Status/>
      <Hangman/>
      <div className="word-div">
        {letterElements}
      </div>
      <Keyboard 
        keyPressed={addGuessedLetter}
        guessedLetters={guessedLetters}
        secretWord={currentWord}
       />
      <button className='newgame'>New Game</button>
    </>
  )
}

export default App
