import './App.css';
import BarraInfo from './components/home/BarraInfo';
import BarraNavegacao from './components/home/BarraNavegacao';
import BarraHero from './components/home/BarraHero';


function App() {
  return (
      <div className="App">
        <header className="App-header">
        </header> 
        <nav>
          <BarraNavegacao/>
        </nav>
        <div>
          <BarraHero/>
          <BarraInfo/>
        </div>
      </div>  
  );
}
export default App;
