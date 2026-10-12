export default function Keyboard(){
    const alphabet:string = "abcdefghijklmnopqrstuvwxyz"

    const buttonElements = alphabet.split("").map( letter =>
        <button key={letter}>{letter.toUpperCase()}</button>
    )

    return(        
        <div className="keyboard">
            {buttonElements}
        </div>
    )
}