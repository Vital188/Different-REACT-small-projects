// Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius)
//  ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda
//   mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti
//    į tris stulpelius pagal medžio pavadinimą.

// Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” 
// ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus
//  3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų 
//  vienetu (kiekviename kvadrate atskirai).

// Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėtų vienetu. 
// Panaudoti localStorage ir padaryti taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0,
//  o nuo prieš tai buvusio skaičiaus


import Kvadraciukas from "./010/components/Formos2/Kvadraciukas";
import Local from "./010/components/Formos2/Local";
import Miskas from "./010/components/Formos2/Miskas";
import "./App.scss";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Mano miskas</h1>
       <Miskas/> */}
       {/* <Local /> */}
       <Kvadraciukas />
    </header>
    </div>
  );
}

