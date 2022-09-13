// Sukurti komponentą su 3 apskritimais, kurie yra rand spalvų ir mygtuką “Keisti”.
//  Apskritimus DOMe pasižymėti naudojant useRef hooką. Paspaudus mygtuką, panaudoti
//  vanilaJS savybę element.style.background ir pakeisti apskritimų spalvas į kitas
//  random spalvas.


import { useState, useRef } from "react";
import randColor from '../../function/randColor'
import rand from "../../function/rand";

function Rutuliai () {

        const [rutul, setRutul] = useState([]);
        const change = useRef('')
        
        const Add = () => {
          setRutul((s) => [...s, {
            color: randColor(), 
        } ])}

        const keisti = () => {
            change.current.style.backgroundColor = randColor()
        }
        

    return (

<>
        <div className="kvadratas">
        {
        rutul?.map((tt, i) => (<div key={i} ref={change} style={{backgroundColor: tt.color}} className="dog">
            {tt.number}
          </div>))
        }
        </div>
        <button onClick={Add}>Prideti</button>
        <button onClick={keisti}>KEISTI</button>
</>
        )

    
}

export default Rutuliai