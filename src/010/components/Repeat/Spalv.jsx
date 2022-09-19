function Spalv ({color}) {

    return (
        <div className="dog-bin">
        {
        color.map((tt, i) => <div key={i} style={{
            color: tt
        }} className="small">{tt}</div>)
        }
     </div>   
    )
}

export default Spalv