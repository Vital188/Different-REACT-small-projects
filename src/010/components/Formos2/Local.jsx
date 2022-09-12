// Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėtų vienetu. 
// Panaudoti localStorage ir padaryti taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0,
//  o nuo prieš tai buvusio skaičiaus

import { useEffect } from "react";
import { useState } from "react";

function Local () {

    const [number, setNumber] = useState(null);

    const add = () => {
        setNumber(s => s+1)
        // localStorage.setItem('number', number)
        // localStorage.getItem('number')
    }

    useEffect (() => {
        if (number === null) {
          const a = localStorage.getItem('info');
          if (null === a ) {
            setNumber([]);
          }  else {
            setNumber(JSON.parse(a));
          }}
          else {
            localStorage.setItem('info', JSON.stringify(number))  
        }}, [number]);

    return (
        <>
        <h1>{number}</h1>
        <button onClick={add}>ADD</button>
</>
    );
}

export default Local