function Spalva({seaPlaners}) {
    const spalva =seaPlaners.filter(ss => ss.color)
    //  seaPlaners     
    return (

    spalva.map((tt, i ) => <div key={i} style={{color: 'crimson'}}>{'Color:'} {tt.color}</div>)
    
    ) 

 
  
    
    
      }
      
      export default Spalva;