import React, { Component } from 'react';
import '../css/Inicio.css';
import '../css/Prueba.css';
import ScriptService from '../services/ScriptService';

export default class SubirScriptComponent extends Component {
    constructor() {
        super();
        this.state = {
            file: null,
            dificultad: '',
            respuesta: '',
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler = event => {
        this.setState({
            file: event.target.files[0]
        })
    }
    changeDificultadHandler = (event) => {
        this.setState({ dificultad: event.target.value });
    }
    changeRespuestaHandler = (event) => {
        this.setState({ respuesta: event.target.value });
    }

    onClickHandler = () => {
        // condicion de que haya algo vacio
        if (this.state.file === null || this.state.dificultad === '' || this.state.respuesta === '') {
            window.alert("Rellene todos los campos");
            return;
        }
        // condicion de que no sea un archivo .py
        if (this.state.file.name.split('.').pop() !== 'py') {
            window.alert("Solo se aceptan archivos .py");
            return;
        }
        const data = new FormData()
        data.append('file', this.state.file)
        ScriptService.subirScript(data, this.state.dificultad, this.state.respuesta)
            .then(res => {
                window.alert("Se subio el script correctamente");
                window.location.href = '/';
            })
    }

    render() {
        return (
            <div class ="box alone"><br />
                Selecciona tu archivo.
                <p class="comentario">Deberas ingresar tu archivo, seleccionar la dificultad de este e ingresar la respuesta asociada a este problema.</p>
                <div class="comentario">Solo se aceptan archivos .py</div>
                <div className='flexbox-container'>
                    <div className='cajita'>
                        <input type="radio" id="facil" name="dificultad" value="facil" onChange={this.changeDificultadHandler} />
                        <label class="comentario2" for="facil">Facil 😀</label>
                        <input type="radio" id="intermedio" name="dificultad" value="intermedio" onChange={this.changeDificultadHandler} />
                        <label class="comentario2" for="intermedio">Intermedio 😓</label>
                        <input type="radio" id="avanzado" name="dificultad" value="avanzado" onChange={this.changeDificultadHandler} />
                        <label class="comentario2" for="avanzado">Avanzado 🤬</label>
                    </div>
                    <div class="input-file">
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                        { this.state.file == null ? 
                        (
                            <span>Seleccionar archivo</span>
                        ) : (
                            <span>
                                Archivos cargado: {this.state.file.name}
                            </span>
                            )
                        }
                    </div>
                    <div>
                        <input class='respuesta' type="text" placeholder="Respuesta" onChange={this.changeRespuestaHandler} />
                    </div>
                </div>

                <button type="button" class="animated-button" onClick={this.onClickHandler}>Subir</button>
            </div>
        );
    }
}