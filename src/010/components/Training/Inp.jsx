import { useEffect, useRef, useState } from "react"
import randColor from "../../function/randColor";

function Inp () {

    const [set, setSet] = useState ('');
    const [number, setNumber] = useState(null);
    const [soft, setSoft] = useState('dog')
    const [col, setCol] = useState('red')
    const pol = useRef([])

    const dov = () => {
        localStorage.setItem('info', set) 
            for (let i=0; i < set; i++){
        setNumber(s => [...s, {

        }]);
    }
    }

    const change = () => {
        setSoft( t => t === 'dog' ? 'camel' : 'dog');
        
    }

    

    useEffect (() => {
       setCol(randColor());
       pol.current.style.backgroundColor = randColor()
    }, [soft])

    useEffect (() => {
        if (number === null) {
            return setNumber([]);}
            else {
            localStorage.setItem ('infar', JSON.stringify(number))}
        }, [number])

    useEffect (() => {
    const k = localStorage.getItem('infar')
    if (k === null) 
    { return setNumber([]);}
    else {setNumber(JSON.parse(k))}
    }, [])


    return (
        <>
        <input type="number" value={set} ref={pol} onChange={e => setSet(e.target.value)} />
        <button onClick={dov}>Add</button>
        {
            number?.map((tt, i) => <div className={soft} style={{
                backgroundColor: col
            }} key={i}></div>)
        }
        <button onClick={change}>change</button>
        <div className="camel" ></div>
        {/* <button onClick={pokyt}>change</button> */}
        </>

    )
}

export default Inp