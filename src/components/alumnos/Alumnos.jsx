import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';


class Alumnos extends Component {

  state = {
    alumnos: []
  }

  url = Global.urlCursos;

  loadAlumnos = () => {
    var curso = this.props.idCurso;

    var request = "api/Alumnos/FiltrarCurso/" + curso;

    axios.get(this.url + request).then((response) => {
      console.log("Leyendo datos de alumnos del curso " + curso + "...");
      this.setState({
        alumnos: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadAlumnos();
  }

  componentDidUpdate = (oldProps) => {
    if (oldProps.idCurso != this.props.idCurso) {
      console.log("Actualizando de curso " + oldProps.idCurso + " a curso " + this.props.idCurso);
      this.loadAlumnos();
    }
  }


  render() {
    return (
      <div>
        <h2>Lista de Alumnos del curso {this.props.idCurso}</h2>
        <ol>
          {
            this.state.alumnos.map((alumno, index) => {
              return (<li key={index}>{alumno.nombre} {alumno.apellidos} <button onClick={() => this.props.mostrar(alumno)}>Detalles</button></li>)
            })
          }
        </ol>
      </div>
    )
  }
}

export default Alumnos;