import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button.module';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Click button to start Personality test
          </p>
          <Button>Start</Button>
        </header>
      </div>
    </>
  );
}

export default App;
