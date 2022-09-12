import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Narvas from "./Narvas";
import Namas from "./Namas";

function Pasaulis({seaPlaners}) {
    
  console.log(seaPlaners)
    return (
<div>
    <h2>Poriniai: </h2>
    {seaPlaners.filter(d => d.show === 'true' && d.type === 'man').map(el=>  <Akvariumas seaPlaners={el}/> )}
     {/* <Akvariumas seaPlaners={seaPlaners}/>
     <Garazas seaPlaners={seaPlaners}/>
     <Namas seaPlaners={seaPlaners}/>
     <Narvas seaPlaners={seaPlaners}/> */}
     </div>
)    
    
      }
      
      export default Pasaulis;