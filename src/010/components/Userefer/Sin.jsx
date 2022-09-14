import { useContext } from "react";
import BallContext from "./ballContext";

function Sin ({start}) {

const {ball} = useContext(BallContext)

    return (
        <div className="small">
           <h2>{start}</h2>
           <h2>{ball}</h2>
        </div>
    )
}

export default Sin;