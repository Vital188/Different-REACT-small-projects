function Garazas({seaPlaners}) {
    
            
    const gar=seaPlaners.filter(ss => ss.type === 'car')     
    return (

    
    gar.map((tt, i ) => <div key={i} style={{color: tt.color}}>{'Garazas:'} {tt.id}, {tt.name}</div>)
    )
    
      }
      
      export default Garazas;