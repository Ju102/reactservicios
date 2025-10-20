import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';

class EmpleadosOficio extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlEmpleadosByOficio = Global.urlDepartamentos;
    busqueda = React.createRef();

    loadEmpleadosByOficio = (event) => {
        event.preventDefault();

        event.preventDefault();
        var seleccion = this.busqueda.current.value;

        var request = "api/Empleados/EmpleadosOficio/" + seleccion;

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Buscando empleados");
            this.setState({
                empleados: response.data
            })
        });


    }

    loadOficios = () => {
        var request = "api/Empleados/";
        var aux = []
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Buscando oficios...");
            for (var empleado of response.data) {
                if (!aux.includes(empleado.oficio)) {
                    aux.push(empleado.oficio);
                }
            }
            this.setState({
                oficios: aux
            });
        });
    }

    state = {
        oficios: [],
        empleados: []
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Lista de Empleados por Oficio</h1>
                    <select ref={this.busqueda} onSubmit={this.loadEmpleadosByOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {
                                return <option key={index} value={oficio}>{oficio}</option>;
                            })
                        }
                    </select>
                    <button>Mostrar</button>
                </form>
                <hr></hr>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Apellido</th>
                            <th>Salario</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((empleado, index) => {
                                return (<tr>
                                    <td key={index}>{empleado.idEmpleado}</td>
                                    <td key={index}>{empleado.apellido}</td>
                                    <td key={index}>{empleado.salario}</td>
                                    <td key={index}>{empleado.departamento}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmpleadosOficio