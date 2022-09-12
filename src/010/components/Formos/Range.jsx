import { useState } from "react"

function Range () {
   
    const [color, setColor] = useState();
    const [size, setSize] = useState()

    const [dog, setDog] = useState([]);
   

    const change = e => {
        setSize(e.target.value);
      }  

    const change2 = e => {
        setColor(e.target.value);
      }  
    
    
    const pokytis = () => {
    // localStorage.setItem('dydis', size);
    setDog(s => [...s, {
        color: color,
        size: size
        }])
        setColor()
        setSize()
    }
  const handleClick =() => {
    setColor('black');
    setSize(100)
  }

return (
    <div>
        {
        dog.map((tt, i) => <div key={i} style={{
            backgroundColor: tt.color,
            // width: tt.size,
            // height: tt.size
        }} className="camel"></div>)
        }
     <div> 
        <div style={{width: size + 'px', height: size + 'px', backgroundColor: color}}></div>
     <label for="color">Color</label>
     <input type="color" value="#001122"  onChange={change2} ></input>
     </div> 
     <div> 
     <label for="range">SIZE</label>
     <input type="range"   onChange={change} min='10' max='200' ></input>
     </div> 
     <button onClick={handleClick} >POKYTIS</button>
     <button onClick={pokytis}>SAVE</button>
     </div>
)
}

export default Range;


