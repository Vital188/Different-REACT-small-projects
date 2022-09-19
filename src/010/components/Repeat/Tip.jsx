function Tip ({type}) {

    return (
        <div className="dog-bin">
        
        {
        type.map((tt, i) => <div key={i} className="small">Name: {tt}</div>)
        }
        
     </div>   
    )
}

export default Tip