import { useEffect, useRef, useState } from "react";
import rand from "../../function/rand";

function Rutulis() {
  const [rutul, setRutul] = useState(null);
  const undo = useRef([]);
  const [select, setSelect] = useState([]);

  const Add = () => {
    setRutul((s) => [...s, ...Array(rand(1, 3))]);
    setSelect((p) => [...p, {}]);
  };

  useEffect(() => {
    const pol = localStorage.getItem("info");
    if (null === pol) {
      setRutul([]);
    } else {
      setRutul(JSON.parse(pol));
    }
  }, []);

  useEffect(() => {
    if (null === rutul) {
      return;
    }
    localStorage.setItem("info", JSON.stringify(rutul));
    undo.current.push(rutul);
  }, [rutul]);

  const Rem = () => {
    setRutul([]);
    setSelect([]);
  };

  const atgal = () => {
    const back = undo.current.pop();
    if (!back) {
      return;
    }
    if (back.length === rutul.length) {
      setRutul(undo.current.pop());
      setSelect(undo.current.pop());
    } else {
      setRutul(back);
      setSelect(back);
    }
  };


  // [...s ?? [], ...[...Array((5))]]);

  return (
    <>
      <div className="kvadratas">
        {rutul?.map((t, i) => (
          <div key={i} className="camel">
            {i++}
          </div>
        ))}
      </div>
      <div className="card m-5">
        <div className="card-body">
          <h5 className="card-title">SELECT</h5>
          <select value={select} onChange={atgal} className="form-control">
            {select?.map((tt, i) => (
              <option key={i} value="1">
                Zingsnis numeris {++i}
              </option>
            ))}
          </select>
          <div></div>
        </div>
      </div>
      <button onClick={Add}>PRIDETI</button>
      <button onClick={Rem}>Pasalinti</button>
      <button onClick={atgal}>Grazinti</button>
    </>
  );
}

export default Rutulis;
