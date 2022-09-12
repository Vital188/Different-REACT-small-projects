import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Reference() {

   const [number, setNumber] = useState(null);
   const count = useRef(-1);
   const [camel, setCamel] = useState(null);
   const [chatClassName, setChatClassName] = useState('camel');

useEffect (() => {
  if (camel === null) {
    const a = localStorage.getItem('info');
    if (null === a ) {
      setCamel([]);
    }  else {
      setCamel(JSON.parse(a));
    }}
    else {
      localStorage.setItem('info', JSON.stringify(camel))  
  }}, [camel]);

  // useEffect(() => {
  //   if (animals === null) {
  //       const a = localStorage.getItem('cowsAndSheeps');
  //       if (null === a) {
  //           setAnimals([]);
  //       } else {
  //           setAnimals(JSON.parse(a));
  //       }
  //   } else {
  //       localStorage.setItem('cowsAndSheeps', JSON.stringify(animals));


   useEffect(() => {
    count.current = count.current + 1;
  });

  const add = () => {
setCamel(s => [...s,{}])
  } 

   useEffect (() => {
    if(number === null) {
      const info = +localStorage.getItem('informacija');
      if(info === null) {
        setNumber(0)
      } else {
        setNumber(info)
      }
    } else {
      localStorage.setItem('informacija', number)
    }
   }, [number])


  const change = () => {
    setChatClassName(s => s === 'camel' ? 'dog' : 'camel')
  }

   const pokytis = () => {
    setNumber(n => n + 3)
   }

    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <button onClick={pokytis}>pokytis</button>
        <input type='number' value={number}></input>
        <h1>{count.current}</h1>
        <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        {
        camel?.map((cc, i) => <div key={i} className={chatClassName} ></div>)
        }
        <button onClick={add}>ADD</button>
        <button onClick={change}>change</button>
      </>
    );
  }

  export default Reference