
import './App.scss';
// import Buttons from './010/components/Training/Buttons';
import { useEffect, useState } from 'react';
import randColor from './010/function/randColor';
import Butt from './010/components/Training/Butt';
import dataContext from './010/components/Training/DataContext';

function App() {

    const [number, setNumber] = useState(0);
  

    const [nu, setNu] = useState(0)
    const [color, setColor] = useState(randColor())
    const [mark, setMark] = useState(15);

   const pofig = () => {
    setMark(s => s + 10)
   }


    return (
        <div className="App">
            <header className="App-header">
                <dataContext.Provider value={{
                    mark
                 
                }}>

            <h2 style={{color}}>{number}</h2>
            <h1>Total Recall 2</h1>
            {/* <Buttons t={1} setNumber={setNumber} /> */}
            <h2 style={{backgroundColor: color}}>{nu}</h2>
            <Butt setNu={setNu} setColor={setColor} nu={nu} />
            <button onClick={pofig}></button>
            </dataContext.Provider>
            </header>
        </div>
    );
}

export default App;