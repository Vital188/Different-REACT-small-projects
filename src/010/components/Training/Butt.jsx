import { useState, useEffect } from "react";
import randColor from "../../function/randColor";
import Aditional from "./Aditional";

function Butt ({setNu, setColor, nu}) {

    const [numb, setNumb] = useState([]);


   const add = () => {
    for (let i=0; i<50; i++) {
    setNumb((s) => [...s, {
        color: 'red'
    }])}
   }

   useEffect(() => {
    setColor(randColor());
}, [nu]);

    return (
<>

        <div>
            {
                numb.map((bt, i) => <button key={i}  onClick={ () => setNu(s => s  + i)} style={{
                    color: bt.color
                }}>{++i}</button>)
            } 
        </div>
        <button onClick={add}>add</button>
        <Aditional/>
        {/* <div className="miskas">
        {
        [...Array(10)].map((ss, kk) => <div key={kk} className="small"></div> )
        }
        </div> */}
</>

)
}

export default Butt