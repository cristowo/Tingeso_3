import React, { Component } from 'react';
import '../css/Inicio.css';
import TestService from '../services/TestService';

export default class PruebaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dificultad: this.props.match.params.dificultad,
            test: []
        };
    }
	
    componentDidMount() {
        TestService.getTest(this.state.dificultad).then( res => {
            this.setState({test: res.data});
        })
    }
    
    render() {
        return (
            <div class="container">
                <b class="titulo">Selecciona tu dificultad</b>
                <div class="flexbox-container">
                    <div>
                        <div class = "box"><br />
                            Fácil 😀
                            <br />
                            <p class="comentario"> Categoria ideal para jugadores con poco manejo de python. </p>
                            <button class="animated-button">INICIAR</button>
                        </div>
                    </div>
                    <div>
                        <div class = "box"><br />
                            Intermedia 😓
                            <br />
                            <p class="comentario"> Categoria ideal para jugadores con manejo de python.</p>
                            <button class="animated-button">INICIAR</button>
                        </div>
                    </div>
                    <div>
                        <div class = "box"><br />
                            Avanzada 🤬
                            <br />
                            <p class="comentario">Categoria para jugadores con manejo avanzado de python.</p>
                            <button class="animated-button">INICIAR</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}