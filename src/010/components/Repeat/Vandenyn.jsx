import Vard from './Vard'
import Tip from './Tip'
import Spalv from './Spalv'



function Vandenyn ({seaPlaners}) {

    return (
        <>
        {
        <Vard name={seaPlaners.map((tt ) => tt.name)} />
}
      {  <Tip type={seaPlaners.map((tt ) => tt.type)} />}
      {  <Spalv color={seaPlaners.map((tt ) => tt.color)} />}
        
     </>   
    )
}

export default Vandenyn