// Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką,
//  atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką,
//   prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis.
//    Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.

// Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti.
//  Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs.
//   Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.

// Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. 
// Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti
//  ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.

// Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. 
// Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. 
// Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų 
// (Arial, Times new Roman ar panašiai)
//  Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.

// Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range 
// vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti.
//  Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu.
// Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. 
// Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą.
//  Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. 
//  Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.

import { useEffect, useState } from "react";
import "./App.scss";
import rand from './010/function/rand'
import Katinai from "./010/components/Formos/Katinai";
import Skaiciai from "./010/components/Formos/Skaiciai";
import Selectas from "./010/components/Formos/Select";
import Range from "./010/components/Formos/Range";
import Kitoks from "./010/components/Formos/Kitoks";

function App() {
  
  




  return (
    <div className="App">
      <header className="App-header">
       {/* <Katinai/> */}
       {/* <Skaiciai/> */}
       {/* <Selectas/> */}
       {/* <Range/> */}
       {/* <Kitoks/> */}
       
      </header>
    </div>
  );
}

export default App;
