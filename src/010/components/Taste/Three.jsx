import { useState } from "react"


function Three () {



const [size, setSize] = useState(0);


const plus = () => { 
    setSize  (s => s + 1)
}

const minus = () =>{
    setSize  (s => s - 3)
}
return (
    <>
  <div className='miskas'>{size}</div>
<button onClick={plus}>+</button> 
<button onClick={minus}>-</button> 
</>
  )
};

export default Three;