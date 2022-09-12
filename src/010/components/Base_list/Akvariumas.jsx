function Akvariumas({seaPlaners}) {
    console.log(seaPlaners)
            
    // const akvar=seaPlaners.filter(ss => ss.type === 'fish')     
    return (

    
    <div  style={{color: seaPlaners.color}}>{'Akvariumas:'} {seaPlaners.id}, {seaPlaners.name}</div>
    )
    
      }
      
      export default Akvariumas;