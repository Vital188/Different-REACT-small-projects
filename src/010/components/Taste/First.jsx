import { useState } from "react"

function First () {

const [chatClassName, setChatClassName] = useState('dog');

const doIt = () => { 
    setChatClassName(s => s === 'dog' ? 'camel' : 'dog')
}


return (
    <>
  <div className={chatClassName} ></div>
<button onClick={doIt}>CHANGE</button> 
</>
  )
};

export default First;