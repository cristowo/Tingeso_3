import React from 'react';
import logo from './logo.png';
import './navbar.css'; 

function App() {
  return (
    <nav>
      <div className="text-left"><a href='/'>Inicio</a></div>
      <div className='centro'>
        <div className="navbar-title">PYTHON</div>
        <div className="navbar-logo"><img src={logo} alt="Logo" /></div>
        <div className="navbar-title">RACING</div>
      </div>
      <div className="text-right"><a href='/informacion'>Detalles</a></div>
    </nav>
  );
}

export default App;
