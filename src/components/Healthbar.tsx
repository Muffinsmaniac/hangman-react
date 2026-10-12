import { healthbars } from "../healthbars"

export default function Healthbar(){

    const healthbarElements = healthbars.map(bar => 
        <span key={bar.id} style={{backgroundColor:bar.backgroundColor}}>
            {bar.name}
        </span>
    )

    return(
        <div className="health-bar">
            {healthbarElements}
        </div>

    )
}