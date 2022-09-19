import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import randColor from '../../function/randColor'

function Antfrom () {

    const [vardas, setVardas] = useState('');
    const [svoris, setSvoris] = useState(100);
    const [cat, setCat] = useState(null);
    const [bendras, setBendras] = useState(0);
    const change = useRef('');
    const [bvar, setBvar] = useState(50)

    const add = () => {
        localStorage.setItem('vard', vardas);
        localStorage.setItem('svoris', svoris)
        setCat(s  => [...s, {
            svoris: svoris,
            vardas: vardas
        }])
    }

    useEffect (() => {
        if (cat === null) {
            setCat([])
        } else {localStorage.setItem('VARD', JSON.stringify(cat))}
    }, [cat])

    useEffect (() => {
        const k = localStorage.getItem('VARD')
        if (k === null) 
        {setCat ([])}
        else { setCat(JSON.parse(k))}
    }, [])

  useEffect (() => {
    setBendras(s => s + Number(svoris))
    change.current.style.backgroundColor = randColor();
  }, [cat])

  const bom = e => {
  setSvoris(e.target.value)
  setBvar(e.target.value/2)
}

    return (
<>
        <div className="dog-bin">
            {
                cat?.sort((a,b) => b.svoris - a.svoris)?.map((tt, i ) => <div key={i}  className="small">{tt.vardas} {tt.svoris}</div>)
            }
        </div>    
        <label for="lname">Vardas</label><br></br>
        <input type='name' ref={change} value={vardas} id='lname' onChange={e => setVardas(e.target.value)}></input>
        <label for="fname">Svoris</label><br></br>
        <input type='number' value={svoris} id='fname' onChange={bom}></input>
        <input type='number' value={bvar} id='fname' onChange={e => setBvar(e.target.value)}></input>
        <button ref={change} onClick={add}>sukurti</button>
        <h1>{bendras}
        </h1>
</>        

    )
}

export default Antfrom