import { useEffect } from "react";
import { useState } from "react"

function Staitas ({color}) {

    const [count, setCount] = useState(3);

    const [readas, setReadas] = useState(null)

    const change = () => {
        setCount(s => s+5)
    }

    const minus = () => {
        setCount(s => s-6)
    }

    useEffect (() => {
        console.log('Number')
    }, [count]);   
   
//    paleidziam uzrasyma 
    const save =  () => {
       localStorage.setItem('NUMBER', count);
       const job = JSON.stringify({cat: '1 , 2,  3'});
       localStorage.setItem('mas', job);
     };


//paleidziam uzsavinima     
    const read =  () => {
    setReadas(localStorage.getItem('NUMBER'));
    const job2 = JSON.parse(localStorage.getItem('mas'));
    console.log(job2.cat);
    };

// kad iskart pasirodytu
    useEffect (() => {
    setReadas(localStorage.getItem('NUMBER'))}, [])

    return (
        <>
      <h1 style={{
        color: color
      }}>buvo {count}</h1>
<h1>nuskaityta{readas}</h1>
<button onClick={change}>CHANGE</button>
<button onClick={minus}>Minus</button>
<button onClick={save}>Save</button>
<button onClick={read}>Read</button>   
</>
    )
}

export default Staitas