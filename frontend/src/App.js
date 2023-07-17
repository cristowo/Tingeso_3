import Navbar from './recursos/navbar.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as url from './recursos/urls.js'
import Inicio from './components/Inicio.jsx';
import SubirScript from './components/SubirScript';
import Prueba from './components/Prueba.jsx';
import NoEncontrado from './components/NoEncontrado.jsx';
import Games from './components/Games.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path={url.PATH_HOME} component={Inicio} />
            <Route path={url.PATH_GAMES} component={Games} />
            <Route path={url.PATH_UPLOAD} component={SubirScript} />
            <Route path={url.PATH_TEST + '/:dificultad'} component={Prueba} />
            <Route component={NoEncontrado} />
          </Switch>
        </Router>        
      </header>
      
    </div>
  );
}

export default App;
