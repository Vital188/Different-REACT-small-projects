

function Valtis() {
    const seaPlaners = [
        {id: 1, type: 'man', name: 'Lina', color: 'blue', show: 'true'},
        {id: 2, type: 'car', name: 'Opel', color: 'red', show: 'true'},
        {id: 3, type: 'animal', name: 'Vilkas', color: 'green', show: 'true'},
        {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow', show: 'true'},
        {id: 5, type: 'man', name: 'Tomas', color: 'green', show: 'true'},
        {id: 6, type: 'animal', name: 'Bebras', color: 'red', show: 'true'},
        {id: 7, type: 'animal', name: 'Barsukas', color: 'green', show: 'true'},
        {id: 8, type: 'car', name: 'MB', color: 'blue', show: 'true'},
        {id: 9, type: 'car', name: 'ZIL', color: 'red', show: 'true'},
        {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow', show: 'true'},
      ];
   
    return (
        seaPlaners.filter(ss => ss.type === 'man').map((tt, i ) => <div key={i} style={{color: 'white'}} >{tt.id}, {tt.name}, {tt.color}</div>)
        
    )
    } 
  
  export default Valtis;