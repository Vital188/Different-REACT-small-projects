import { useState } from "react"

function Kitoks () {
   
    const [color, setColor] = useState('');
    const [size, setSize] = useState('')

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
        height: size + 'px',
        width: size + 'px'
        }])
        

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
            width: tt.height,
            height: tt.width
        }} className="camel"></div>)
        }
        <div></div>
     <div> 
        <div style={{width: size + 'px', height: size + 'px', backgroundColor: color}}></div>
     <label for="color">Color</label>
     <input type="color" value="#001122"  onChange={change2} ></input>
     </div> 
     <div> 
     <label for="range">SIZE</label>
     <input type="range"   onChange={change} min='10' max='200' ></input>
     </div> 
     <button onClick={handleClick} >Standart</button> 
     <button onClick={pokytis}>Pokytis</button>
     </div>
)
}

export default Kitoks;