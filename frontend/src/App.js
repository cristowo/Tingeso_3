import Navbar from './recursos/navbar.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import SubirScript from './components/SubirScript';
import Prueba from './components/Prueba.jsx';
import NoEncontrado from './components/NoEncontrado.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/subirScript" component={SubirScript} />
            <Route path="/Prueba" component={Prueba} />
            <Route component={NoEncontrado} />
          </Switch>
        </Router>        
      </header>
      
    </div>
  );
}

export default App;
