import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global'
import axios from 'axios';

class Departamentos extends Component {
    url = Global.urlDepartamentos;
    selectDepartamento = React.createRef();
    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos/";

        axios.get(this.url + request).then(response => {
            console.log("Leyendo departamentos...");
            this.setState({
                departamentos: response.data
            })
        })
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let id = this.selectDepartamento.current.value;
        this.setState({
            idDepartamento: id
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "green" }}>Component Departamento</h1>
                <form onSubmit={this.buscarEmpleados}>
                    <label>Seleccione Opción: </label>

                    <select ref={this.selectDepartamento}>
                        {
                            this.state.departamentos.map((departamento, index) => {
                                return <option value={departamento.numero} key={index}>{departamento.nombre}</option>
                            })
                        }
                    </select>
                    <button>Buscar</button>
                </form>
                {
                    this.state.idDepartamento != 0 &&
                    <Empleados iddepartamento={this.state.idDepartamento}></Empleados>
                }
            </div>
        )
    }
}

export default Departamentos;