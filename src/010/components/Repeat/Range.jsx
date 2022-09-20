import { useState } from "react";

function Range() {
  const [dog, setDog] = useState([]);
  const [size, setSize] = useState();
  const [col, setCol] = useState();

  const save = () => {
    setDog((s) => [
      ...s,
      {
        color: col,
        size: size + "px",
      },
    ]);
    setCol();
    setSize();
  };

  const pokyt = () => {
    setCol("black");
    setSize(100);
  };

  return (
    <div>
      Uzsaugoti kvadratai
      {dog.map((tt, i) => (
        <div
          key={i}
          style={{
            backgroundColor: tt.color,
            width: tt.size,
            height: tt.size,
          }}
          className="small"
        ></div>
      ))}
      <div>nupiestas kvadratas
       {size && col && <div
          style={{
            width: size + "px",
            height: size + "px",
            backgroundColor: col,
          }}
        ></div>} 
        <div 
        style={{
          width: size + "px",
          height: size + "px",
          backgroundColor: 'white',
        }}
      ></div>
        <input
          type="range"
          id="volume"
          min="10"
          max="200"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label for="volume">Size</label>
      </div>
      <div>
        <input
          type="color"
          id="cowbell"
          value="#001122"
          onChange={(e) => setCol(e.target.value)}
        />
        <label for="cowbell">Cowbell</label>
      </div>
      <button onClick={save}>Save</button>
      <button onClick={pokyt}>Pokytis</button>
    </div>
  );
}

export default Range;
