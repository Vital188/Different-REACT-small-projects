import { useState } from "react";

function Miskas () {

    const [dog,setDog] = useState([]);
    const [cat,setCat] = useState([]);
    const [crol,setCrol] = useState([]);

    const add = () => {
        setDog(s => [...s, {}]);
    }

    const add2 = () => {
        setCat(p => [...p, {}]);
    }

    const add3 = () => {
        setCrol(s => [...s, {}]);
    }

    return (
        
    <div className="miskas">
        <div className="azuolas">
            {
                dog.map((tt, i ) => <div key={i} className="camel">Azuolas</div>)
            }
        <button onClick={add}>Azuolas</button>
        </div>
        
        <div className="berzas">
        {
                cat.map((tt, i ) => <div key={i} className="camel" style={{
                    backgroundColor: 'pink'
                }}>Berzas</div>)
            }
        <button onClick={add2}>Berzas </button>
        </div>
        <div className="uosis">
        {
                crol.map((tt, i ) => <div key={i} className="camel" style={{
                    backgroundColor: 'skyblue'
                }}
                >Uosis</div>)
            }
        <button onClick={add3}>Uosis </button>
        </div>
        
    </div>

    );
}

export default Miskas