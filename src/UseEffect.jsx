import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";

function App() {

   const  [count, setCount] = useState(1);
   const  [read, setRead] = useState(null);




const save = () => {
 localStorage.setItem('number', count)
 const obj = JSON.stringify({ob: 'vital'})
 localStorage.setItem('objektas', obj)
   };

const calc = () => {
 setCount(s => s + 5);
   };

const readNumber = () => {
    setRead(localStorage.getItem('objectas'));
}
   
useEffect (() => {
    setRead(localStorage.getItem('number'));
}, [])
 useEffect (() => {
    console.log('ogo')
 }, [count])




  return (
    <div className="App">
      <header className="App-header">
        <h1>count= {count}</h1>
        <h2>Nuskaityta:{read}</h2>
        <button onClick={calc}>dauginam is 5</button>
    <button onClick={save}>save</button> 
    <button onClick={readNumber}>Read</button>
      </header>
    </div>
  );
}

export default App;
