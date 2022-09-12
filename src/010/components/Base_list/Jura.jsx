import Sala from "./Sala";
import Laivas from "./Laivas";
import Valtis from "./Valtis";


function Jura({seaPlaners}) {
    
const sortas = seaPlaners.filter(ss => ss.type === 'fish')   
 
     
    return (

        <div>
        <Sala/>
        <Laivas/>
        <Valtis/>
        <div>
            {
        sortas.map((tt, i ) => <div key={i} style={{color: 'blue'}}>{tt.id}, {tt.name}, {tt.color}</div>)
            }
        </div>
</div>

    );
    
      }
      
      export default Jura;