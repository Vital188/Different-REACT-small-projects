

import { useState } from 'react';
import './App.scss';




function App() {

const [dog, setDog] = useState([])

const add  = () => { 
  setDog(s => [...s, {
      color: 'red'
}])
}
  
    return (
      <div className="App">
        <header className="App-header">
        {
    dog.map((kk, i) => <div style={{backgroundColor: kk.color}}  className="camel" key={i} >{i++}</div>)
        }
    <button onClick={add}>Red square</button>   
        </header>
      </div>
    );
  }
  
  export default App;
  