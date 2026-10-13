import hangman8 from "../assets/hangman8.png"
import Healthbar from "./Healthbar.tsx"

type HangmanProps = {
    wrongGuessesCount:number
}

export default function Hangman({wrongGuessesCount}:HangmanProps){
    return(
        <main>
            <Healthbar
                wrongGuessesCount={wrongGuessesCount}
            />
            <div className="picture-container">
                <img src={hangman8}/>
            </div>
        </main>
    )
}