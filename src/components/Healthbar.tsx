import { healthbars } from "../healthbars"

type HealthbarProps = {
    wrongGuessesCount:number
}

export default function Healthbar({wrongGuessesCount}:HealthbarProps){

    const colorCodes:string[] = [
        "#85BB65",
        "#A0B65B",
        "#B9B052",
        "#C9A04F",
        "#C88745",
        "#B9683F",
        "#B9683F",
        "#822F2B",
    ]
    
    const healthbarElements = healthbars.map(bar => 
        <span 
            key={bar.id} 
            style={{
                backgroundColor: wrongGuessesCount > bar.id ?
                "#F1E5CE" :
                colorCodes[wrongGuessesCount]}}                          
        >
            {wrongGuessesCount === bar.id ? bar.name : ""}
        </span>
    )

    return(
        <div className="health-bar">
            {healthbarElements}
        </div>

    )
}