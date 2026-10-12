import hangman8 from "../assets/hangman8.png"
import Healthbar from "./Healthbar.tsx"

export default function Hangman(){
    return(
        <main>
            <Healthbar/>
            <div className="picture-container">
                <img src={hangman8}/>
            </div>
        </main>
    )
}