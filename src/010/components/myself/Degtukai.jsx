import { useState } from "react";

function Degtukai({ size, color, col, back }) {
  const [siz, setChose] = useState("");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [camel, setCamel] = useState([]);

  const doIt = () => {
    setText([]) || setCamel([]);
  };

  const doIt1 = () => {
    setText("So stupid decision !!!");
  };

  const doIt2 = () => {
    setText("Such a smart girl !!!");
  };

  const Add = () => {setCamel((s) => [...s,
      {
        row: s.length + 1,
      },
    ]);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: col,
          color: color,
          fontSize: size + "px",
        }}
      >
        Violeta do you like me ???
      </div>

      <div>
        {text} {text2} {siz}{" "}
      </div>

      {
      camel.map((c, i) => (<div className="camel" key={i}>YES </div>))
      }

      <button
        onClick={doIt2}
        style={{
          fontSize: size + "px",
          color: "green",
        }}
      >
        Yes
      </button>
      <button
        onClick={doIt1}
        style={{
          fontSize: size + "px",
          color: "grey",
          backgroundColor: back,
        }}
      >
        No
      </button>

      <button onClick={doIt} style={{ fontSize: 40 }}>
        Reset
      </button>

      <button onClick={Add} style={{ fontSize: 40 }}> Add</button>
    </>
  );
}

export default Degtukai;
