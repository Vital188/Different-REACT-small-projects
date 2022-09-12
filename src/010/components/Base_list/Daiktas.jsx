function Daiktas({ poriniai, neporiniai }) {
  //    if(!show) {
  //     return null;
  // }

  if (poriniai) {
    return <div>{poriniai.map((el) => el.name)} </div>;
  } else {
    return <div>{neporiniai.map((el) => el.name)}</div>;
  }
}

export default Daiktas;
