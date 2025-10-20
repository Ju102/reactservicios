import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import Alumnos from './Alumnos';

class Cursos extends Component {

    url = Global.urlCursos;

    seleccion = React.createRef();

    state = {
        cursos: [],
        curso: 0,
        alumno: null
    }

    loadCursos = () => {

        var request = "api/Alumnos/Cursos";

        axios.get(this.url + request).then((response) => {
            console.log("Buscando cursos...");
            this.setState({
                cursos: response.data,
            })
            console.log("Cursos cargados");
        })

    }

    changeCurso = () => {
        var curso = this.seleccion.current.value;

        this.setState({
            curso: curso,
            alumno: null
        })
    }

    showDetalles = (alumno) => {
        this.setState({
            alumno: alumno
        })
    }

    componentDidMount = () => {
        this.loadCursos();
    }

    render() {
        return (
            <div>
                <h1>Lista de Cursos</h1>

                <label>Seleccione: </label>
                <form>
                    <select ref={this.seleccion} onChange={this.changeCurso}>
                        <option value="0">Seleccione una opción</option>
                        {
                            this.state.cursos.map((curso, index) => {
                                return (<option key={index} value={curso}>{curso}</option>)
                            })
                        }
                    </select>
                </form>
                <br></br><br></br>
                <hr></hr>
                {
                    this.state.curso != 0 &&
                    <Alumnos idCurso={this.state.curso} mostrar={this.showDetalles}></Alumnos>
                }

                <hr></hr>
                {
                    this.state.alumno != null &&
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                    <td><img src={this.state.alumno.imagen} alt={this.state.alumno.nombre} style={{ width: "50px" }}></img></td>
                                    <td>{this.state.alumno.nombre}</td>
                                    <td>{this.state.alumno.apellidos}</td>

                                </tr>
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default Cursos;