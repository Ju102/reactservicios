import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

class Empleados extends Component {
    url = Global.urlEmpleados;
    state = {
        empleados: [],
    }


    loadEmpleados = () => {
        let id = this.props.iddepartamento;
        let request = "api/Empleados/EmpleadosDepartamento/" + id;

        axios.get(this.url + request).then((response) => {
            console.log("Leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        console.log("Cargando empleados");
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.iddepartamento != this.props.iddepartamento) {
            console.log(`Actualizando ID de ${oldProps.iddepartamento} a ${this.props.iddepartamento}`);
            this.loadEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h2 style={{ color: "blue" }}>Departamento ID {this.props.iddepartamento}</h2>
                <ul>
                    {
                        this.state.empleados.map((empleado, index) => {
                            return (<li key={index}>{empleado.idEmpleado} - {empleado.apellido} ({empleado.oficio})</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Empleados;