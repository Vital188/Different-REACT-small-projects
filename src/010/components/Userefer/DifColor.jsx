// Sukurti komponentą su 3 apskritimais, kurie yra rand spalvų ir mygtuką “Keisti”.
//  Apskritimus DOMe pasižymėti naudojant useRef hooką. Paspaudus mygtuką, panaudoti
//  vanilaJS savybę element.style.background ir pakeisti apskritimų spalvas į kitas
//  random spalvas.


import { useState, useRef, useEffect } from "react";
import randColor from '../../function/randColor'
import rand from "../../function/rand";

function Rutuliai () {

        const [rutul, setRutul] = useState(null);
        const change = useRef([])
        // const change2 = useRef([])
        // const change3 = useRef([])
        
        const Add = () => {
          const trys = []
          for ( let i=0; i<3; i++){
            trys.push( {
              color: randColor(),
              number: rand(5,100) 
          })
          }
          setRutul((s) => [...s,  ...trys])}

        const keisti = () => {
          console.log(change)
          // console.log([...change])
          // for (const key in change) {
          //   if (Object.hasOwnProperty.call(change, key)) {
          //     const element = change[key];
          //     // element.current.style.backgroundColor = randColor()
          //     console.log(element)
          //   }
          // }
          change.current.forEach(element => {
            element.style.backgroundColor = randColor()
          });
            // change.current.style.backgroundColor = randColor()
            // change2.current.style.backgroundColor = randColor()
            // change3.current.style.backgroundColor = randColor()
        }

 

        useEffect (() => {
          if (  null === rutul ) {
            return;}
           localStorage.setItem('info', JSON.stringify(rutul));
        }, [rutul])

      
         useEffect (() => {
        const k = localStorage.getItem('info')
        if ( null === k) {
          setRutul([])} else {
            setRutul(JSON.parse(k))}
        }, [])

    return (

<>
        <div className="kvadratas">
        {
        rutul?.map((tt, i) => (<div key={i} ref={(tt)=> change.current[i]=tt} style={{backgroundColor: tt.color}} className="dog">
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