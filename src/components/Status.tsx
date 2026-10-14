
type StatusProps = {    
    isGameWon:boolean,
    isGameLost:boolean
}



export default function Status(props:StatusProps){
    const isGameOver = props.isGameWon || props.isGameLost;

    function pickBackgroundColor():React.CSSProperties{
    if(props.isGameWon){return {backgroundColor: "#85BB65"}}
    if(props.isGameLost){ return {backgroundColor: "#822F2B"} }
    return {backgroundColor: "#29251F"}
    }

    return(
        <div className="status-bar" style={pickBackgroundColor()}>
            {isGameOver && <><h2>{props.isGameWon ? "You win" : "You Lose!"}</h2>
            <p>{props.isGameWon ? "Well done 🤠" : "You have always been a failure..."}</p></>}            
        </div>
    )
}