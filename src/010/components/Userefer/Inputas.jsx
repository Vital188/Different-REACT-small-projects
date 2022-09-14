import { useState } from "react"
import rand from "../../function/rand";

function Inputas () {
    
    const [vienas, setVienas] = useState('');
    const [dog, setDog] = useState([])

   const setNumber = e => {
    setVienas(e.target.value)
   }

    const change = () => {
    localStorage.setItem('number', vienas);
    for (let i=0; i < vienas; i++) {
    setDog(s => [...s, {
        color: 'red',
        number: rand(100,200)
    }]);
   }
        
}


    return (
      <div>
        {
            dog.map((kv, i) => <div key={i} style={{
                backgroundColor: kv.color
            }} className="dog">{kv.number}</div> )
        }
          <input type="text" value={vienas} onChange={setNumber}></input>
          <button onClick={change}>Change</button> 

      </div>

    )
}

export default Inputas