import './App.css';
import Pirmas from './010/components/pirmas/pirmas';
import Antras from './010/components/pirmas/antras';
import randColor from './010/function/randColor';
import Textas from './010/components/pirmas/trecias'
import Sortas from './010/components/list/sort';




function App() {
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];  
  return (
    <div className="App">
      <header className="App-header">{
   
    
     
      
    dogs.sort((a, b) => b.length - a.length).map((dog, i) => <div className="dog App-logo" ><span className="App-logo2">{dog} {++i}</span></div>)
     
}
{/* <h1>labas</h1> */}
{/*       
       <Pirmas></Pirmas>  
       <Antras xx='1'></Antras>
      <Antras xx='2'></Antras> 
      <Textas one="fantastika" two="Komedija" color="blue"></Textas>   */}

      

      </header>
    </div>
  );
}

export default App;
