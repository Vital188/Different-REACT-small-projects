import { useEffect, useState } from "react";
import "./App.scss";

function App() {

  const [text, setText] = useState('');

useEffect (() => {
setText(localStorage.getItem('informacija'));
}, [])

 

const save = () => {localStorage.setItem('informacija', text)};
const read = () => {setText(localStorage.getItem('informacija'))}

// useEffect (() => {
//    setText(localStorage.getItem('informacija', text));
//  }, [text])

  const changeText = e => {
    
    setText(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={text} onChange={changeText}></input>
         <button onClick={save}>save</button>
          <button onClick={read}>read</button>   
      </header>
    </div>
  );
}

export default App;

// useEffect (() => {
//    setText(localStorage.setItem('informacija', text));
//  }, [text])