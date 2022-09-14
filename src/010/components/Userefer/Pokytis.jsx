import { useState } from "react";

function Pokytis () {

    const [changeclass, setChangeclass] = useState ('dog')

    const change = () => {
        setChangeclass(t => t === 'dog' ? 'camel' : 'dog'); 
    }

    return (
        <>
        <div className={changeclass}></div>
        <button onClick={change}>POKYTIS</button>
        </>
    )
}

export default Pokytis