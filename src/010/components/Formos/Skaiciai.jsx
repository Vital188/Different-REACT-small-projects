import { useState } from "react";

function Skaiciai () {

    const [pirmas, setPirmas] = useState(100);
    const [antras, setAntras] = useState(50);
    
    const change = e => {
        setPirmas(e.target.value);
        setAntras(e.target.value / 2)
    }

   

    const change2 = e => {
        setAntras(e.target.value);
    }

    const pokytis = () => {
    localStorage.setItem('number', pirmas);
    localStorage.setItem('numberis', antras);
    localStorage.getItem('number')
    setAntras(Number(pirmas) / 2);    
    }

    return (
        <>
    <div> 
    <label for="fname">Pirmas skaicius:</label>
  <input type="text" value={pirmas} onChange={change}></input>
  </div> 
  <div> 
  <label for="fname">Antras skaicius</label> 
  <input type="text" value={antras} onChange={change2}></input> 
  </div>
  <button onClick={pokytis}>Dalyba is 2</button> 
  </>
)}

export default Skaiciai