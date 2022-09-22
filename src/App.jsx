// Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. Sukurti mygtuką “į ganyklą”, 
// kurį paspaudus dešinė pusė būtų apgyvendinta avimis, kurias vaizduoja apskritimai, o kairė pusė karvėmis, 
// kurias vaizduoja keturkampiai. Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random 
// identifikacinis numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis rand skaičius. 
// Perkrovus puslapį avių ir karvių skaičius ir jų identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” turi būti tuščia).
//  Paspaudus ant avies arba karvės ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal). 
//  Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.
// Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą.
import { useState } from "react";
import "./App.scss";
import rand from './010/function/rand'
import { useEffect } from "react";
import { useRef } from "react";

function App() {

  const [kvad, setKvad] = useState(null);
  const [rutul, setRutul] = useState(null);
  

  const add = () => {
    for (let i=0; i < rand(2,5); i++) {
    setKvad(s => [...s, {
      number: 'K' + (rand(0, 999999)) 
    }])}
    for (let i=0; i < rand(2,5); i++) {
    setRutul(s =>[...s, {
      number: 'A' + (rand(0, 999999)) 
    }])}
  }

  useEffect (() => {
    if (kvad === null) {
      setKvad([])
    }
    else {localStorage.setItem('KVAD', JSON.stringify(kvad))}
  }, [kvad])

  useEffect (() => {
    const l = localStorage.getItem('KVAD')
    if ( l === null ) {
      setKvad ([])
    }
    else {setKvad(JSON.parse(l))}
  }, [])

  useEffect (() => {
    if (rutul === null) {
      setRutul([])
    }
    else {localStorage.setItem('rutul', JSON.stringify(rutul))}
  }, [rutul])

  useEffect (() => {
    const k = localStorage.getItem('rutul')
    if ( k === null ) {
      setRutul ([])
    }
    else {setRutul(JSON.parse(k))}
  }, [])

  const change = (kv, index) => {
    const copyRut = [...kvad]
    const copyKvad = [...kvad].filter((el, i) => index !== i)
    copyRut.push(kv)
   setKvad(copyKvad)
   setRutul(copyRut)
  }

  const change2 = (rut, index) => {
    const copyKvad = [...rutul]
    const copyRut = [...rutul].filter((el, i) => index !== i)
    copyKvad.push(rut)
   setKvad(copyKvad)
   setRutul(copyRut)
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <div className="miskas">
        <div className="azuolas">
          {
          kvad?.map((kv, i) =>  <div onClick={() => change(kv, i)}  className="kvad" key={i}>{kv.number}</div>)
          }
        </div>
        <div className="berzas">
        {
          rutul?.map((rut, i) => <div onClick={()=>change2(rut, i)} className="rutul" key={i}>{rut.number}</div>)
          }
        </div>
      </div>
      <button onClick={add}>I ganykla</button>

      </header>
    </div>
  );
}

export default App;
