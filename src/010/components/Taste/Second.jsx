import { useState } from "react"
import rand from '../../function/rand'

function Second () {

const [chatClassName, setChatClassName] = useState('dog');

const [numb, setNumb] = useState(rand(50,100));


const doIt = () => { 
    setChatClassName(s => s === 'dog' ? 'camel' : 'dog')
}

const chan = () =>{
 setNumb(rand(5,25));
}
return (
    <>
  <div className={chatClassName}>{numb}</div>
<button onClick={doIt}>CHANGE</button> 
<button onClick={chan}>Numbers</button> 
</>
  )
};

export default Second;