import hangman1 from "../assets/hangman1.png"
import hangman2 from "../assets/hangman2.png"
import hangman3 from "../assets/hangman3.png"
import hangman4 from "../assets/hangman4.png"
import hangman5 from "../assets/hangman5.png"
import hangman6 from "../assets/hangman6.png"
import hangman7 from "../assets/hangman7.png"
import hangman8 from "../assets/hangman8.png"
import Healthbar from "./Healthbar.tsx"

type HangmanProps = {
    wrongGuessesCount:number
}

const hangmanImages = [
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
    hangman7,
    hangman8,
]

export default function Hangman({wrongGuessesCount}:HangmanProps){
    return(
        <main>
            <Healthbar
                wrongGuessesCount={wrongGuessesCount}
            />
            <div className="picture-container">
                <img src={hangmanImages[wrongGuessesCount]}/>
            </div>
        </main>
    )
}