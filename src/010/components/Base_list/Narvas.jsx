function Narvas({seaPlaners}) {
    
            
    const nar=seaPlaners.filter(ss => ss.type === 'animal')     
    return (

    
    nar.map((tt, i ) => <div key={i} style={{color: tt.color}} >{'Narvas:'} {tt.id}, {tt.name} </div>)
    )
    
      }
      
      export default Narvas;