function Vard ({name}) {

    return (
        <div className="dog-bin">
        
        {
        name.map((tt, i) => <div key={i} className="small">{tt}</div>)
        }
        
     </div>   
    )
}

export default Vard