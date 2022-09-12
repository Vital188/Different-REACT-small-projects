import { useState } from "react"


function Five () {



const [dog, setDog] = useState([ ]);




const addred = () => { 
    setDog(s => [...s, {
        color: 'red'
}])
}

const addblue = () =>{
    setDog(s => [...s, {
        color: 'blue'
}])
}

const reset  = () =>{
    setDog([]) 
}
return (
    <>
 
<div className="dog-bin">
{
    dog.map((kk, i) => <div style={{backgroundColor: kk.color}} className="dog" key={i} ></div>)
}
</div>

<button onClick={addred}>Add red</button> 
<button onClick={addblue}>Add blue</button> 
<button onClick={reset}>RESET</button>
</>
  )
};

export default Five;