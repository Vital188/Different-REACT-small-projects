import { useState } from "react";


function Selectas () {


    const [select, setSelect] = useState(2);
    const [text, setText] = useState('');
    const [stilius, setStilius] = useState({
        color: 'black',
        fontSize: '30px'
    });

    const change = e => {
        setSelect(e.target.value);
        if(e.target.value === 'zalgiris'){
            setStilius({
                color: 'blue',
                fontFamily: 'cursive',
                fontSize: '30px'
         })};
        if(e.target.value === 'L.Rytas'){
            setStilius({
                color: 'green',
                fontFamily: 'cursive',
                fontSize: '50px'
        })};
        if(e.target.value === 'Kupriniai'){
            setStilius({
                color: 'red',
                fontFamily: 'cursive',
                fontSize: '40px'
        })};
    };
    

    const pokytis = e => {
        setText(e.target.value);
    }

return (

    <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title">SELECT</h5>
                <select value={select} onChange={change} className="form-control" >
                    <option value="zalgiris">1</option>
                    <option value="L.Rytas" >2</option>
                    <option value="Kupriniai">3</option>
                </select>
                <div>
                <label htmlFor="text">Tekstas</label>
                <input type="text" style={stilius}  value={text}  onChange={pokytis}></input> 
                </div>
            </div>
        </div>
    );


}

export default Selectas;
