import Single from "./Single";
import { useState, useEffect } from "react";

function All() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [dav, setDav] = useState(1);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const alphabet = () => {
  setItems([...items].sort((a,b) => {
    if(a.name < b.name){
        return 1;
    }
    if(a.name > b.name){
        return -1;}
    return 0 }))
  setDav(1 + 1)
  }


   const other  = () => {
    setItems([...items].sort((a,b) => {
        if(b.name < a.name){
            return 1;
        }
        if(b.name > a.name){
            return -1;
        }
        return 0;
}))
setDav(2 - 1)
}

  

  const change = () => {
    setDav( dav === 1 ? alphabet : other);
    
}



 const oceania = () => {
    setItems([...items].filter(it => it.region === "Oceania"))
}

const lithuania = () => {
    setItems([...items].filter(lt => lt.area > 65300))
}


  return (
    <>
      <div>
      <div className="title">Different countries with theirs region and area</div>
        <div className="button-box">
        <button className="buttonA" onClick={change}>ALPHABET</button>
        <button className="buttonB" onClick={oceania}>Oceania</button>
        <button className="buttonC" onClick={lithuania}>Lietuva</button>
        </div>
        {items.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default All;
