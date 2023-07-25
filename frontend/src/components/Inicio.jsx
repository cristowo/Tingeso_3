import React, { Component } from 'react';
import '../css/Inicio.css';
import { PATH_TEST, PATH_NOVATO, PATH_AVANZADO, PATH_INTERMEDIO, PATH_UPLOAD} from '../recursos/urls';

export default class InicioComponent extends Component {

    selectDificultad(dificultad){
        window.location.href = PATH_TEST + dificultad;
    }
    
    simpleRedirect(path){
        window.location.href = path;
    }

    render() {
        return (
            <div>
                <div class="flexbox-container">
                    <div>
                        <div class = "box"><br />
                            ¿Quieres aportar a la comunidad de Python Racing? 🤓☝.
                            <br />
                            <p class="comentario">Sube un script de tu código para que este sea incluido dentro de nuestras carreras.</p>
                            <button class="animated-button" onClick={() => this.simpleRedirect(PATH_UPLOAD)}>Subir Script 🔼</button>
                        </div>
                    </div>
                    <div>
                        <div class ="box"><br />
                            Inicio Rápido ⚡.
                            <p class="comentario">Selecciona entre nuestros 3 modos de carrera.</p>
                            <button class="animated-button" onClick={() => this.selectDificultad(PATH_NOVATO)}>Fácil 😀</button>
                            <button class="animated-button darker-button" onClick={() => this.selectDificultad(PATH_INTERMEDIO)} >Media 😓</button>
                            <button class="animated-button darker-button2" onClick={() => this.selectDificultad(PATH_AVANZADO)}>Avanzada 🤬</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}