import logo from './logo.svg';
import './App.css';
import './components/home/BarraNavegacao';
import './components/home/BarraHero';
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
      <body>
        <BarraHero/>
        <BarraInfo/>
      </body>
    </div>
  );
}

export default App;
