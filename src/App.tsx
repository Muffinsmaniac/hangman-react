import { useState } from 'react'
import { healthbars } from "./healthbars"
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

  const isGameLost:boolean = wrongGuessesCount >= healthbars.length -1
  const isGameWon:boolean = 
    currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver:boolean = isGameLost || isGameWon
  
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
      <Status
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        />
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
      {isGameOver && <button className='newgame'>New Game</button>}
    </>
  )
}

export default App
