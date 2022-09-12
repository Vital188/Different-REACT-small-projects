

import Base from './010/components/Practise/Base';
import Penktas from './010/components/Practise/Props.jsx/penktas';
import Props from './010/components/Practise/Props.jsx/props';
import Staitas from './010/components/Practise/Staitas';
import './App.scss';




function App() {

  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
  console.log(dogs); 
  
    return (
      <div className="App">
        <header className="App-header">
        {/* <Props color='red' padding='10px' text1='ABC' backgroundColor='blue'></Props> */}
        {/* <Staitas color='green'></Staitas> */}
        {/* <Base twocolors='1'></Base>
        <Base twocolors='2'></Base>
        <Penktas text1='fantastika' text2='komedija' color='red'></Penktas> */}
       {
        dogs.map((sunis, i) => <div key={i}  className={i % 2 ? 'dog' : 'camel'}>{sunis}</div>)
        } 
        {
        dogs.sort((a,b) => a.lenght - b.lenght).map((sunis, i) => <div key={i}  className= 'dog'>{sunis}</div>)
        }
        </header>
      </div>
    );
  }
  
  export default App;
  