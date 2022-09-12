import { useEffect } from "react";
import { useState } from "react"
import rand from "../../function/rand";



function Katinai () {

    // let bendras = 0;
   
    const [vardas, setVardas] = useState('');
    const [svoris, setSvoris] = useState([]);
    const [dog, setDog] = useState(null);
    const [bendras, setBendras] = useState(0)

    const change = e => {
        setVardas(e.target.value);
      }

      const change2 = e => {
        setSvoris(e.target.value);
      }  
    
    
      const pokytis = () => {
        localStorage.setItem('vardas', vardas);
        localStorage.setItem('svoris', svoris);
        // const objec = JSON.stringify({katinas: 'dog'});
        // localStorage.setItem('katinas', objec)
        // setBendras(bendras + Number(svoris));
        setDog(s => [...s,{}]);
        //     {
        //     color: 'green',
        //     number: svoris,
        //     names: vardas,
        //     row: s.length     
        // }
    
        }
    // const save = () => 
    // {setVardas(localStorage.getItem('vardas'));
    // setSvoris(localStorage.getItem('svoris'));
    // const cat = JSON.parse(localStorage.getItem('katinas'));
// };

// useEffect (() => {
// setVardas(localStorage.getItem('vardas'));
// }, [])

// useEffect (() => {
//     setSvoris(localStorage.getItem('svoris'));
//     }, [])

// useEffect (() => {
//     JSON.parse(localStorage.getItem('cat'));
//         }, [])

// useEffect (() => {
// setText(localStorage.getItem('informacija'));
// }, [])
     
useEffect(() => {
    if (dog === null) {
        const a = localStorage.getItem('Katinai');
        if (null === a) {
            setDog([]);
        } else {
            setDog(JSON.parse(a));
        }
    } else {
        localStorage.setItem('Katinai', JSON.stringify(dog));
    }
}, [dog]);
    

    // useEffect (() => {
    //     setDog(localStorage.getItem('number'));
    //     }, [])

        // useEffect (() => {
        //     setVardas(localStorage.getItem('number'));
        //     }, [])

return (
    <div>
        {
        dog?.map((tt, i) => <div key={i} className="dog"></div>)
        }
     <div> 
       <label for="fname">Svoris:</label>
     <input type="text" value={svoris} onChange={change2}></input>
     </div> 
     <div> 
     <label for="fname">Vardas:</label> 
     <input type="text" value={vardas} onChange={change}></input> 
     </div>
     <button onClick={pokytis}>pokytis</button>
     {/* <button onClick={save}>Save</button> */}
     <h1>{dog?.reduce((prev, curr)=> prev + Number(curr.number), 0  )}</h1> 
      <h1>Bendra katinu svorio suma bus: {bendras}</h1>

      
     </div>
)

}

export default Katinai;

// useEffect (() => {
//    setText(localStorage.setItem('informacija', text));
//  }, [text])