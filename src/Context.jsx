import { useState } from "react";
import BallContext from "./010/components/Constext/BallContext";
import "./App.scss";
import Tevas from './010/components/Constext/Tevas'





function App() {


const [count, setCount] = useState('');
const [ball, SetBall]  = useState('');

const blok = () => {
  SetBall(s => s+1)
};


  return (
    <div className="App">
      <header className="App-header">
        <BallContext.Provider value = {
          {
            ball,
            setCount,
            count
          }
        }>
         <div className="miskas">
          <Tevas/>
          <h2>{count}</h2>
          <button onClick={blok}>Add</button>
         </div>
        </BallContext.Provider>
      </header>
    </div>
  );
}

export default App;
