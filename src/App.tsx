import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Hangman from './components/Hangman'
import Keyboard from './components/Keyboard'

function App() {
  //Variables
  const [currentWord, setCurrentWord] = useState<string>("react")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const wrongGuessesCount:number = //Deriving the amount of wrong guesses!
    guessedLetters.filter( letter => !currentWord.includes(letter)).length
  
  
  //Elements 
  const letterElements = currentWord.split("").map( (letter,index) =>
    <span key={index}>
      {guessedLetters.includes(letter) && letter.toUpperCase()}
    </span>
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
      <Hangman 
        wrongGuessesCount={wrongGuessesCount}/>
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
