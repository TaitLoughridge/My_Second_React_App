import React from 'react';
import Game from "./Components/Game";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tic Tac Toe!</h1>
        <Game />
      </header>
      
    </div>
  );
}

export default App;
