import React from 'react';
import logo from './logo.png';
import './navbar.css'; 
import {PATH_GAMES, PATH_HOME } from './urls';

function App() {
  return (
    <nav>
      <div className="text-left"><a href={PATH_HOME}>Inicio</a></div>
      <div className='centro'>
        <div className="navbar-title">PYTHON</div>
        <div className="navbar-logo"><img src={logo} alt="Logo" /></div>
        <div className="navbar-title">RACING</div>
      </div>
      <div className="text-right"><a href={PATH_GAMES}>Juegos</a></div>
    </nav>
  );
}

export default App;
