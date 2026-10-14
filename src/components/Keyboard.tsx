type KeyboardProps = {
    keyPressed:(letter:string) => void,
    guessedLetters:string[],
    secretWord:string,
    isGameOver:boolean
}

export default function Keyboard({keyPressed,guessedLetters,secretWord, isGameOver}:KeyboardProps){
    const alphabet:string = "abcdefghijklmnopqrstuvwxyz"

    function getButtonClass(letter:string){
        if(!guessedLetters.includes(letter)){
            return ""
        }        
        return secretWord.includes(letter) ? "correct-guess" : "wrong-guess"
    }

    const buttonElements = alphabet.split("").map( letter =>
        <button key={letter}
                onClick={()=>keyPressed(letter)}
                className={getButtonClass(letter)}    
                disabled={isGameOver}
        >              
            {letter.toUpperCase()}
        </button>
    )

    return(        
        <div className="keyboard">
            {buttonElements}
        </div>
    )
}