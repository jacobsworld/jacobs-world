import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jacobs World
        </p>
        <a
          className="App-link"
          href="./components/About/index.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header> */}
      <Nav></Nav>
      <About></About>
    </div>
    
  );
}

export default App;
