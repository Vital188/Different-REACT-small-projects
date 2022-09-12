import Daiktas from "./Daiktas";

function Tvenkinys({seaPlaners}) {
   // seaPlaners.map((d, i) => d.id % 2 ? d.show= 'true' :  d.show='false')
    // console.log(seaPlaners.filter(d => d.show === 'true'))
  
  
    return (
    <>
      <Daiktas poriniai={seaPlaners.filter(d => d.show === 'true')}/>

      <Daiktas neporiniai={seaPlaners.filter(d => d.show === 'false')}/>
      {/* // dogs.map((d, i) => <div key={i} className={'dog ' + (i % 2 ? 'sq' : 'cc')} >{d}</div>) */}
    </>
  );
}

export default Tvenkinys;
