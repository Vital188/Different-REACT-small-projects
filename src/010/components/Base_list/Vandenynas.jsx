import Spalva from "./Spalva";
import Vardas from "./Vardas";
import Tipas from "./Tipas";


function Vandenynas({seaPlaners}) {
    
            
        return (
    <div>
     <Spalva seaPlaners={seaPlaners}/>
     <Tipas seaPlaners={seaPlaners}/>
     <Vardas seaPlaners={seaPlaners}/>
     </div>
    )    
        
          }
          
          export default Vandenynas;