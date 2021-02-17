import top from './images/top_oil_1.png';
import bottom from './images/bottom_oil_1.png';
import logo from './images/logo_melisse_oil.png';
import melisse from './images/melisse.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={top} className="top" alt="top" />
        
        <img src={bottom} className="bottom" alt="bottom" />
        <img src={melisse} className="melisse" alt="melisse" />
        
        <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default App;
