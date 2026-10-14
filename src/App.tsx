import { useState } from 'react'
import { healthbars } from "./healthbars"
import { randomWord } from './util'
import Confetti from "react-confetti"
import Header from './components/Header'
import Status from './components/Status'
import Hangman from './components/Hangman'
import Keyboard from './components/Keyboard'

function App() {
  //Variables
  const [currentWord, setCurrentWord] = useState<string>(() => randomWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) 

  const wrongGuessesCount:number = //Deriving the amount of wrong guesses!
    guessedLetters.filter( letter => !currentWord.includes(letter)).length

  const isGameLost:boolean = wrongGuessesCount >= healthbars.length -1
  const isGameWon:boolean = 
    currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver:boolean = isGameLost || isGameWon
  const lastGuessCorrect:boolean = checkLastGuessCorrect()

  //Elements 
  const letterElements = currentWord.split("").map( (letter,index) =>    
    <span 
      key={index}
      style={(isGameOver && !guessedLetters.includes(letter)) ?
        {color: "#822F2B"} : {}
      }>
      {(isGameOver || guessedLetters.includes(letter)) && letter.toUpperCase()}
    </span>
  )
  
  //Functions
  function addGuessedLetter(letter:string){    
    setGuessedLetters(prevLetters => {
      return prevLetters.includes(letter) ? [...prevLetters] : [...prevLetters, letter];
    })    
  }

  function checkLastGuessCorrect():boolean{
    if(guessedLetters.length === 0){
      return true
    }

    const lastGuess = guessedLetters[guessedLetters.length-1]
    if(currentWord.split("").includes(lastGuess)){
      return true
    }
    return false    
  }

  function startNewGame(){
    setCurrentWord(randomWord())
    setGuessedLetters([])
  }


  return (
    <>
      {isGameWon && <Confetti 
        colors={["#85BB65", "#822F2B", "#D4A373", "#29251F"]}
        numberOfPieces={1000}
        recycle={false}/>}
      <Header/>
      <Status
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        isLastGuessCorrect={lastGuessCorrect}
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
        isGameOver={isGameOver}
       />
      {isGameOver && <button className='newgame' onClick={startNewGame}>New Game</button>}
    </>
  )
}

export default App
