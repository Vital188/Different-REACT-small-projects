function Buttons({setNumber, color, t}) {


    const doNumber = what => {
        setNumber(n => n + what);
    }


    return (
        <>
        
        <div className="dog-bin">
            {
                [...Array(50)].map((_, i) => <button key={i} style={{
                    backgroundColor: color
                }} onClick={() => doNumber(t +i + 1)}>{i + 1 + t}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;