import {getMessages} from "../util.ts"

type StatusProps = {    
    isGameWon:boolean,
    isGameLost:boolean,
    isLastGuessCorrect:boolean
}


export default function Status(props:StatusProps){
    const isGameOver = props.isGameWon || props.isGameLost;

    function pickBackgroundColor():React.CSSProperties{
    if(props.isGameWon){return {backgroundColor: "#85BB65"}}
    if(props.isGameLost){ return {backgroundColor: "#822F2B"} }
    if(!props.isLastGuessCorrect) { return {backgroundColor: "#B9683F"} }
    return {backgroundColor: "#29251F"}
    }

    return(
        <div className="status-bar" style={pickBackgroundColor()}>
            {isGameOver && <><h2>{props.isGameWon ? "You win" : "You Lose!"}</h2>
            <p>{props.isGameWon ? "Well done 🤠" : "You have always been a failure..."}</p></>}
            {(!isGameOver && !props.isLastGuessCorrect) && <p>{getMessages()}</p>}            
        </div>
    )
}