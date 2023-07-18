import React, { Component } from 'react';
import '../css/Inicio.css';
import '../css/Prueba.css';
import ScriptService from '../services/ScriptService';
import TestService from '../services/TestService';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class PruebaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dificultad: this.props.match.params.dificultad,
      scripts: [],
      respuesta: [],
      id: [],
      tiempo: 0.0,
      puntaje: [],
      respuestaSubida: false,
    };
  }

  componentDidMount() {
    ScriptService.getScripts(this.state.dificultad)
    .then((res) => {
      this.setState({ scripts: res.data });
  
      const scriptIDs = res.data.map((script) => script.id);
      this.setState({ id: scriptIDs });
    })
    .catch((error) => {
      console.error("Hubo un error al obtener los scripts: ", error);
    });
  
  }
  

  changeRespuestaHandler = (event, i) => {
    if (!this.state.respuestaSubida) {
      const respuestaCopy = [...this.state.respuesta];
      respuestaCopy[i] = event.target.value;
      this.setState({ respuesta: respuestaCopy});
    }
  };

    selectLink(link){
        window.location.href = link;
    };

  enviarRespuestas = (e) => {
    e.preventDefault();
    if (this.state.respuesta.length === this.state.scripts.length) {
      TestService.getPuntaje(this.state.id, this.state.respuesta, this.state.tiempo).then((res) => {
        this.setState({ puntaje: res.data, respuestaSubida: true });
      });
    } else {
      window.alert('No se han respondido todas las preguntas');
    }
  };



  render() {
    const { respuestaSubida , respuesta, puntaje } = this.state;

    return (  
        <div className="center-content">
        <div>
            <div className="box">
                <p className="titulo"> nivel {this.state.dificultad}</p>
                tiempo actual: 20:77:3:8050
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    {
                    this.state.scripts.map((script, i) => (
                    <tr key={script.id}>
                        <div className="box-code">
                            <td>
                                <div className="comentario">Id Pregunta: {script.id}</div>
                                <SyntaxHighlighter language="python" style={solarizedDarkAtom} className="custom-code">
                                    {script.codigo}
                                </SyntaxHighlighter>
                                <input
                                    type="text"
                                    value={this.state.respuesta[i] || ''} // Set value from state, or empty if not available
                                    onChange={(event) => this.changeRespuestaHandler(event, i)}
                                    disabled={this.state.respuestaSubida} // Disable input if answers are submitted
                                />
                            </td>
                        </div>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div>
            <div className="box">
                {respuestaSubida  ? (
                    <div>
                        <h2>Puntaje: {puntaje[4]}</h2>

                            <h2>Respuestas Actuales:</h2>
                            <ul>
                                {respuesta.map((value, i) => (
                                    <li key={i}>
                                        {value} - {puntaje[i] === 'Buena' ? 'Correcta ✅' : 'Incorrecta ❌'}
                                    </li>
                                ))}
                            </ul>
                            <button className="animated-button" onClick={() => this.selectLink('/games')}>
                                Volver a jugar
                            </button>
                            <button className="animated-button darker-button" onClick={() => this.selectLink('/')}>
                                Volver al inicio
                            </button>
                    </div>
                ) : (
                    <div>
                        <h2>Respuestas Actuales:</h2>
                        <ul>
                            {respuesta.map((value, i) => (
                                <li key={i}>
                                    {value}
                                </li>
                            ))}
                        </ul>
                        <button className="animated-button" onClick={this.enviarRespuestas}>
                            Enviar respuestas
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
    );}
}