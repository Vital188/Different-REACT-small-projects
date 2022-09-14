import Kvadratas from './010/components/Userefer/Kvadratas';
import Rutuliai from './010/components/Userefer/DifColor';
import Rutulis from './010/components/Userefer/Rutulis';
import './App.scss';
import Inputas from './010/components/Userefer/Inputas';
import Kvadraciukas from './010/components/Formos2/Kvadraciukas';
import Pokytis from './010/components/Userefer/Pokytis';
import Otec from './010/components/Userefer/Otec';
import { useState } from 'react';
import BallContext from './010/components/Userefer/ballContext';

function App() {

   const [start, setStart] = useState('')
   const [ball, setBall] = useState('')

   const Add = () => {
    setStart(s => s+ '*')
   }

   const doIt = () => {
    setBall(s => s + '$')
   }


  return (
    <div className="App">
      <header className="App-header">
      {/* <Kvadratas /> */}
      {/* <Rutulis/> */}
        {/* <Rutuliai />  */}
       {/* <Inputas />   */}
      {/* <Kvadraciukas /> */}
      {/* <Pokytis /> */}
      <BallContext.Provider value={{
         ball
      }}>
      <div className='miskas'>
      <Otec start={start}/>
      </div>
      <button onClick={Add}>Prideti</button>
      <button onClick={doIt}>Prideti</button>
      </BallContext.Provider>
      </header>
    </div>
  );
}

export default App;
