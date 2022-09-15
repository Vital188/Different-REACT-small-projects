function Buttons({setNumber, color, t}) {


// const doNumber = what => {
//     setNumber(n => n + what);
// }


    return (
        <>
        
        <div className="dog-bin">
            {
                [...Array(50)].map((_, i) => <button key={i} style={{
                    backgroundColor: color
                }} onClick={() => setNumber(s => s + 1 + i)}>{i + 1}</button>)
            }
        </div>
        </>
    )
}

export default Buttons;