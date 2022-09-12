import { useContext } from "react";
import BallContext from "./BallContext";

function Sunus () { 

   const {ball, setCount, count} = useContext(BallContext)
   
       return (
        <div className="camel">
       <h2>{ball}</h2>
       <button onClick={() => setCount( s => s + 2 )}></button>
       <h3>{count}</h3>
       </div>
   )
   }

   export default Sunus


//    {() => setStar(s => s + '*')}