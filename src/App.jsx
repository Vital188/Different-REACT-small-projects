// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.

// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime.
//  Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio
//  , o apskritimai sunumeruoti nuo 1 iki galo.

// Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis
// atvaizduoti kvadratuose, neporinius apskritime.

// Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide 
// praleisti (neatvaizduoti).

// Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių
//  masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus
//   raudonai.


import Vienas from "./010/components/Repeat/vienas";
import "./App.scss";


// <div className="dogs-container">
//         {dogs.map((dog, i) =>
//           i % 2 === 0 ? (
//             <Kvadratas key={uuidv4()} dog={dog} />
//           ) : (
//             <Apskritimas key={uuidv4()} dog={dog} />
//           )
//         )}
//       </div>


function App() {



const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
console.log(dogs)





  return (
    <div className="App">
      <header className="App-header">
        {
          dogs.map((dog, i) =>  
          ++i % 2 === 0 ?
         ( <div  className="dog">{+i}.{dog}</div> ) : 
          (<div className="camel">{+i}.{dog}</div>)
        )}
  
      </header>
    </div>
  );
}

export default App;
