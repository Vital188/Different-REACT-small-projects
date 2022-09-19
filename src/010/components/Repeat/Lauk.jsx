import { useState } from "react"
import rand from '../../function/rand'

function Lauk () {


    const [numb, setNumb] = useState('');
    const [dog, setDog] = useState([]);

    const change  = () => {
        // eslint-disable-next-line no-lone-blocks
        // localStorage.setItem('infom', numb) 
            for (let i=0; i < numb; i++) { 
        setDog(s => [...s, {
           number: rand(100, 200)
        }])
    }
}


    return ( 
        <>
            {
                dog?.map((tt, i) => <div key={i} className="small">{tt.number}</div>)
            }
           <input type="number" value={numb}  onChange={e => setNumb(e.target.value)}></input>
            <button onClick={change}>Pokytis</button>     
        </>
    )
}

export default Lauk