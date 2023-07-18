import React, { Component } from 'react';
import '../css/Inicio.css';
import player from '../recursos/faker.png';
import { PATH_TEST, PATH_NOVATO, PATH_AVANZADO, PATH_INTERMEDIO, PATH_GAMES, PATH_UPLOAD} from '../recursos/urls';

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
                            ¿Quieres aportar a la comunidad de Python Racing?.
                            <br />
                            <p class="comentario">Sube un script de tu código para que este sea incluido dentro de nuestras carreras.</p>
                            <button class="animated-button" onClick={() => this.simpleRedirect(PATH_UPLOAD)}>Subir Script</button>
                        </div>
                        <div class = "box"><br />
                            Que esperas para unirte a la comunidad de Python Racing.
                            <br />
                            <p class="comentario">Python Racing es una comunidad de programadores que ponen a prueba sus habilidades de programación y entendimiento de algoritmos.</p>
                            <button class="animated-button">Ver detalles</button>
                            <button class="animated-button darker-button" onClick={() => this.simpleRedirect(PATH_GAMES)}>Ir a los juegos</button>
                        </div>
                    </div>
                    <div>
                        <div class ="box"><br />
                            Inicio Rápido
                            <p class="comentario">Selecciona entre nuestros 3 modos de carrera.</p>
                            <button class="animated-button" onClick={() => this.selectDificultad(PATH_NOVATO)}>Fácil</button>
                            <button class="animated-button darker-button" onClick={() => this.selectDificultad(PATH_INTERMEDIO)} >Media</button>
                            <button class="animated-button darker-button2" onClick={() => this.selectDificultad(PATH_AVANZADO)}>Avanzada</button>
                        </div>
                    </div>
                </div>
                <div class = "box">
                    <br />
                    Conoce a Daigo, el mejor programador de la semana.
                    <br /><br />
                    <img src = {player} alt="faker" className="image-size"/>
                    <br />
                    <p class="comentario">Daigo es un programador de Python Racing que ha logrado batir el 76% de los scripts de la comunidad. </p>
                </div>
            </div>
        );
    }
}