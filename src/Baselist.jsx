// 1. Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.

// 2.Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai. Tvenkinys komponente du kartus panaudokite komponentą 
// Daiktas atvaizduoti masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą).

// 3.Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. 
// Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento).

// 4.Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. 
// Vandenynas tėvinis komponentas kiti trys vaikiniai. 
// Vaikiniuose komponentuose atvaizduoti tą patį masyvą, tik išrūšiuotą pagal komponento vardą (pvz Tipas išrūšiuota pagal tipą ir t.t.).

// 5.Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. 
// Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners 
// pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. 
// Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą).
// Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant
// porinius ir neporinius masyvo įrašus.

// Kiekviename uždavinyje galima susikurti kiek reikia papildomų komponentų.
// Visuose uždaviniuose name savybę reikia nudažyti spalva, kuri yra color savybėje.



import './App.scss';
import Bala from './010/components/Base_list/Bala';
import Tvenkinys from './010/components/Base_list/Tvenkinys';
import Jura from './010/components/Base_list/Jura';
import Vandenynas from './010/components/Base_list/Vandenynas';
import Pasaulis from './010/components/Base_list/Pasaulis';



function App() {
  const seaPlaners = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue', show: 'true'},
    {id: 2, type: 'car', name: 'Opel', color: 'red', show: 'true'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green', show: 'true'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow', show: 'true'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green', show: 'true'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red', show: 'true'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green', show: 'true'},
    {id: 8, type: 'car', name: 'MB', color: 'blue', show: 'true'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red', show: 'true'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow', show: 'true'},
  ];
  seaPlaners.map((d, i) => d.id % 2 ? d.show= 'true' :  d.show='false')

  return (
    <div className="App">
      <header className="App-header">
      {/* <Bala /> */}
      {/* <Tvenkinys seaPlaners={seaPlaners}/> */}
      {/* <Jura seaPlaners={seaPlaners}/> */}
      <Vandenynas seaPlaners={seaPlaners}/> 
      {/* <Pasaulis seaPlaners={seaPlaners}/> */}
     

      </header>
    </div>
  );
}

export default App;
