function Tipas({seaPlaners}) {
    
    const tipas =seaPlaners.filter(ss => ss.type)     
    return (

    
    tipas.map((tt, i ) => <div key={i} style={{color: 'blue'}}>{'Type:'} {tt.type}</div>)
    )
    
      }
      
      export default Tipas;