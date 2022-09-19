
import { useState } from "react";

function Select() {

const [select, setSelect] = useState('')
const [numeris, setNumeris] = useState('')
const [stilus, setStilus] = useState({
    color: 'black',
    fontSize: '20px'
})

const change = e => {
    setSelect(e.target.value)
    if (e.target.value === '1') {
    setStilus({
        color: 'green',
        fontFamily: 'cursive',
        fontSize: '50px'
    })}
    if (e.target.value === '2') {
        setStilus({
            color: 'green',
            fontFamily: 'cursive',
            fontSize: '100px'
        })}
        if (e.target.value === '3') {
            setStilus({
                color: 'blue',
                fontFamily: 'cursive',
                fontSize: '150px'
            })}
}






  return (
    <div className="miskas">
      <select class="form-select" value={select} onChange={change}>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input type='text' style={stilus} value={numeris} onChange={((e) => setNumeris(e.target.value))}></input>
    </div>
  );
}

export default Select;
