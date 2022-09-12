function Vardas({seaPlaners}) {
const vardas = seaPlaners.filter(ss => ss.name)    
    //  seaPlaners    
    return (

    vardas.map((tt, i ) => <div key={i} style={{color: 'green'}}>{'Name:'} {tt.name}</div>) 
  
    )
 
  
    
    
      }
      
      export default Vardas;