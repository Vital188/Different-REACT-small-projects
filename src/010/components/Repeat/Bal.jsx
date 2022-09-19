function Bal ({seaPlaners}) {

    return (
      <div className="dog-bin">
      {
      seaPlaners.map((tt, i ) => <div key={i} className="small">{tt.id}, {tt.name}, {tt.type},{tt.color}</div>)
      }
      {
      seaPlaners.map((tt) => console.log(tt))
    }  
      </div>
    )
}

export default Bal