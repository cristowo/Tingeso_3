import React, { Component } from 'react';
import '../css/Inicio.css';
import { PATH_TEST, PATH_NOVATO, PATH_AVANZADO, PATH_INTERMEDIO} from '../recursos/urls';

export default class GamesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dificultad: this.props.match.params.dificultad,
            test: []
        };
    }

    componentDidMount() {
        fetch(PATH_TEST + this.state.dificultad)
            .then(res => res.json())
            .then((data) => {
                this.setState({ test: data })
            })
            .catch(console.log)
    }

    selectDificultad(dificultad){
        window.location.href = PATH_TEST + dificultad;
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
                            <button class="animated-button" onClick={() => this.selectDificultad(PATH_NOVATO)}>INICIAR</button>
                        </div>
                    </div>
                    <div>
                        <div class = "box"><br />
                            Intermedia 😓
                            <br />
                            <p class="comentario"> Categoria ideal para jugadores con manejo de python.</p>
                            <button class="animated-button" onClick={() => this.selectDificultad(PATH_INTERMEDIO)}>INICIAR</button>
                        </div>
                    </div>
                    <div>
                        <div class = "box"><br />
                            Avanzada 🤬
                            <br />
                            <p class="comentario">Categoria para jugadores con manejo avanzado de python.</p>
                            <button class="animated-button" onClick={() => this.selectDificultad(PATH_AVANZADO)}>INICIAR</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}