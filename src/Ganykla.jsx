// REACT useState & useEffect PROJECT (MyLittleFarm)

// Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės.
//  Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis,
// kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja keturkampiai.
// Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random
// identifikacinis numeris: pvz avim A0254787, karvėm K0007898, kur skaičius
// yra septynženklis rand skaičius. Perkrovus puslapį avių ir karvių skaičiusir jų
// identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” turi būti
// tuščia). Paspaudus ant avies arba karvės ji turi perbėgti į priešingą ganyklos pusę
//  (antrą kartą paspaudus grįžti atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę.
//  Pakartotinai paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.

// Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi.
//  Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą.

import { useEffect, useState } from "react";
import "./App.scss";
import rand from "./010/function/rand";

function App() {
  const [cam, setCam] = useState([]);
  const [dog, setDog] = useState([]);
  const [camel, setCamel] = useState('camel')
  const [doggy, setDoggy] = useState('dog')
  const [count, setCount] = useState(1);
  const [read, setRead] = useState(null);

const save = () =>  {
 localStorage.getItem('number', count);
}

  
useEffect(() => {
  console.log('pokytis');
}, [cam]);

useEffect(() => {
  console.log('Ivyko')
}, [dog]);

useEffect(() => {
  setRead(localStorage.getItem('number'));
 }, []);




  function change() {
    setCamel(t => t === 'camel' ? 'dog' : 'camel');
    setDoggy(t => t === 'dog' ? 'camel' : 'dog');
  }
  const doIt4 = () => {
  setCam([...Array(rand(5, 20))]);
//   {
//          number: rand(11111111, 9999999)  
//  };
  setDog([...Array(rand(5, 20))]);
  // (s => [...s, {
  //   number: rand(11111111, 9999999),
  //    row: s.length,
  //    show: true
  //  }]);

  setCount(s => s + 1)
};

  return (
    <div className="App">
      <h1
        style={{
          fontSize: 40,
          color: "crimson",
        }}
      >
        Ganykla nr.{count} Pirmadienis {read}
      </h1>
      <header className="App-header">
        <h2 className='left' >
          Avis,
          {cam.map((c, i) => (
            <button key={i} className={camel} onClick={change}>A{rand(0, 99999999)}</button>
          ))}

        </h2>
        <h2 className="right">
          Karves,
          {dog.map((c, i) => (
            <div key={i} className={doggy} onClick={change}>K{rand(0, 9999999)}</div>
          ))}
        </h2>
      </header>
      <button onClick={doIt4}>I ganyklą</button>
      <button onClick={save}>Svarbu</button>
    </div>
  );
}

export default App;
