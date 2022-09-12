// Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+”
// ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus
//  3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų
//  vienetu (kiekviename kvadrate atskirai).
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Kvadraciukas() {
  const [squareList, setSquareList] = useState([]);

  const addToSquareList = () => {
    setSquareList((tt) => [...tt, { id: uuidv4(), value: 0 }]);
  };

  const updateSquareValue = (squareId) => {
    setSquareList((tt) => {
      return tt.map((square) => {
        return square.id === squareId ? { ...square, value: square.value + 1 } : square;
      });
    });
  };

  return (
    <div>
      <button onClick={addToSquareList}>Prideti</button>
     
        {squareList.map((square) => (
          <div key={square.id} className="camel">
            <button onClick={() => updateSquareValue(square.id)}>+</button>
            <p>{square.value}</p>
          </div>
        ))}
     
    </div>
  );
}

export default Kvadraciukas;