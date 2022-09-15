import { useContext } from "react"
import dataContext from "./DataContext"

function Aditional () {

const {mark} = useContext(dataContext)

    return (
        <h2>{mark}</h2>
    )
}

export default Aditional