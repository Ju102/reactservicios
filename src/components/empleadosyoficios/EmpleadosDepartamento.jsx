import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

class EmpleadosDepartamento extends Component {

    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamento = React.createRef();

    buscarEmpleadoByDept = (event) => {
        event.preventDefault();
        var idSearch = parseInt(this.selectDepartamento.current.value);
        var request = "api/Empleados/EmpleadosDepartamento/" + idSearch;

        axios.get(this.urlEmpleados + request).then(response => {
            console.log("Leyendo datos...");
            this.setState({
                empleados: response.data
            })

        });
    }

    buscarDepartamentos = () => {
        var request = "webresources/departamentos/";
        axios.get(this.urlDepartamentos + request).then(response => {
            console.log("Cargando departamentos...");
            this.setState({
                departamentos: response.data
            });
        });
    }

    state = {
        empleados: [],
        departamentos: []
    }

    componentDidMount = () => {
        this.buscarDepartamentos();
    }

    render() {
        return (
            <div style={{padding: "10px"}}>
                <h1 style={{ color: "blue" }}>Empleados por Departamento</h1>
                <form onSubmit={this.buscarEmpleadoByDept}>
                    <label>Seleccione Departamento: </label>
                    <select ref={this.selectDepartamento} onSubmit={this.buscarEmpleadoByDept} style={{marginRight: "5px"}}>
                        {
                            this.state.departamentos.map((departamento, index) => {
                                return <option key={index} value={departamento.numero}>{departamento.nombre}</option>;
                            })
                        }
                    </select>
                    <button>Buscar</button>
                </form>
                <ul>
                    {
                        this.state.empleados.map((empleado, index) => {
                            return <li key={index}>{empleado.idEmpleado} - {empleado.apellido}</li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default EmpleadosDepartamento;