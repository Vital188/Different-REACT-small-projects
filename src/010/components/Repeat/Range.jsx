import { useState } from "react";

function Range() {

    const [dog, setDog] = useState([])

    const change = () => {
        setDog(s => [...s, {
            

        }])
    }


  return (
    <div>
      <h1>range</h1>
      <input type="range" id="volume" min="10" max="200" />
      <label for="volume">Size</label>
      <input
        type="color"
        id="cowbell"
      />
      <label for="cowbell">Cowbell</label>
      {
        dog.map((tt, i) => <div key={i} className="small"></div>)
      }
      <button onClick={change}>POKYTIS</button>
    </div>
  );
}

export default Range;
