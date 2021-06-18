// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';


function App() {

  const [categories] = useState([
    {
      name: "summer",
      description: "Summer",
    },
    { 
        name: "fall", 
        description: "Fall" 
    },
    { 
        name: "winter", 
        description: "Winter" 
    },
    {
      name: "spring",
      description: "Spring",
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>

      <main>
      <Gallery currentCategory={currentCategory}></Gallery>
      <About></About>
      </main>
      
      
      
    </div>
    
  );
}

export default App;
