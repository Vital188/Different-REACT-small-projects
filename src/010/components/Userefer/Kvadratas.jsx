import { useEffect, useState, useRef } from "react"
import rand from '../../function/rand'

function Kvadratas () {

    const [kvad, setKvad] = useState(null)
    const undo = useRef([]);


    useEffect(() => {
        const k = localStorage.getItem('kvad');
        if (null === k) {
            setKvad([]);
        } else {
            setKvad(JSON.parse(k));
        }
    }, []);    

    useEffect(() => {
        if (null === kvad) {
            return;
        }
        localStorage.setItem('kvad', JSON.stringify(kvad));
        undo.current.push(kvad);
    }, [kvad]);
  

 const Add = () => {
        setKvad(k => [...k ?? [], ...[...Array(rand(5, 10))]]);
}
       
    const Remove = () => {
        setKvad([])
    }
   
    const Back = () => {
        const first = undo.current.pop();
        if(!first) {
            return;
        }
        if (first.length === kvad.length) {
            setKvad(undo.current.pop());
        } else {
            setKvad(first);
        }
    }

    return (
        <>
        <div className="kvadratas">
            {
                kvad?.map((num, i) => <div className="camel" key={i}></div>)
            }
           
        </div>
        <button onClick={Add}>PRIDETI</button>
        <button onClick={Remove}>ISVALYTI</button>
        <button onClick={Back}>Atgal</button>
    </>)
}

export default Kvadratas