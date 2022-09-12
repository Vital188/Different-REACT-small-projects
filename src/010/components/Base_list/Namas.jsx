function Namas({seaPlaners}) {
    
            
    const nam=seaPlaners.filter(ss => ss.type === 'man')     
    return (

    
    nam.map((tt, i ) => <div key={i} style={{color:tt.color}}>{'Namas:'}{tt.id}, {tt.name}</div>)
    )
    
      }
      
      export default Namas;