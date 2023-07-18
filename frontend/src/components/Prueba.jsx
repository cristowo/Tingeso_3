import React, { Component } from 'react';
import '../css/Inicio.css';
import TestService from '../services/TestService';

export default class PruebaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dificultad: this.props.match.params.dificultad,
            scripts: []
        };
    }
	// test tiene: id, pregunta, respuesta, dificultad y script
    componentDidMount() {
        TestService.getTest(this.state.dificultad).then( res => {
            this.setState({scripts: res.data});
        })
    }

    render() {
        return (
            <div class>
                <h1 className="text-center">Test de dificultad {this.state.dificultad}</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Pregunta</th>
                                <th>Respuesta</th>
                                <th>código</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.scripts.map(
                                    script =>
                                        <tr key={script.id}>
                                            <td>{script.pregunta}</td>
                                            <td>{script.respuesta}</td>
                                            <td>{script.codigo}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}