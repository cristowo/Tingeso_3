import React, { Component } from 'react';
import '../css/Inicio.css';
import player from '../recursos/faker.png';

export default class InicioComponent extends Component {

    render() {
        return (
            <div class="container">
                <div class="flexbox-container">
                    <div>
                    <br />
                        Conoce a Daigo, el mejor programador de la semana.
                        <br /><br />
                        <img src = {player} alt="faker" className="image-size"/>
                        <br />
                        <p class="comentario">Daigo es un programador de Python Racing que ha logrado batir el 76% de los scripts de la comunidad. </p>
                    </div>
                    <div>
                    <br />
                        Que esperas para unirte a la comunidad de Python Racing.
                        <br />
                        <p class="comentario">Python Racing es una comunidad de programadores que ponen a prueba sus habilidades de programación y entendimiento de algoritmos.</p>
                        <button class="animated-button">Ver detalles</button>
                        <button class="animated-button darker-button" >Ir a los juegos</button>

                        <div class ="down">
                            Inicio Rápido
                            <p class="comentario">Selecciona entre nuestros 3 modos de carrera.</p>
                            <button class="animated-button">Fácil</button>
                            <button class="animated-button darker-button" >Media</button>
                            <button class="animated-button darker-button2">Avanzada</button>
                        </div>
                    </div>
                </div>
                <div>
                    ¿Quieres aportar a la comunidad de Python Racing?.
                    <br />
                    <p class="comentario">Sube un script de tu código para que este sea incluido dentro de nuestras carreras.</p>
                </div>
            </div>
        );
    }
}