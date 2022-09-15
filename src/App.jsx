
import './App.scss';
import Buttons from './010/components/Training/Buttons';
import { useEffect, useState } from 'react';
import randColor from '../../home-work/src/010/function/randColor';

function App() {

    const [number, setNumber] = useState(0);
    const [color, setColor] = useState(null);

    useEffect(() => {
        setColor(randColor());
    }, [number]);


    return (
        <div className="App">
            <header className="App-header">
            <h2 style={{color}}>{number}</h2>
            <h1>Total Recall 2</h1>
            <Buttons t={1} setNumber={setNumber} />
            <Buttons  t={50} setNumber={setNumber} color={'crimson'}/>
            <Buttons  t={100} setNumber={setNumber} color={'green'}/>
            </header>
        </div>
    );
}

export default App;