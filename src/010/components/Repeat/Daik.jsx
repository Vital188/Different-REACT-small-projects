function Daik ({seaPlaners}) {

    const porinis = seaPlaners.map((d, i) => d.id % 2 == 0 ? <div  style={{
        color: d.color
    }} className="small">{d.name}</div> : '' ) 
    const neporinis = seaPlaners.map((d, i) => d.id % 2 !== 0 ? <div key={i} style={{
        color: d.color
    }} className="small">{d.name}</div> : '' )
    return (
        <div className="dog-bin">
             <h1>{porinis}</h1>
             {/* <h2>{neporinis}</h2> */}
        </div>
    )
}

export default Daik