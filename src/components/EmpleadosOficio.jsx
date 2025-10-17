import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

class EmpleadosOficio extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlEmpleadosByOficio = Global.urlDepartamentos;
    busqueda = React.createRef();

    loadEmpleadosByOficio = (event) => {
        event.preventDefault();
        var seleccion = this.busqueda.current.value;

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Buscando empleados")
        });
        

    }

    loadOficios = () => {
        var request = "api/Empleados/";
        var aux = []
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Buscando oficios...");
            for (var empleado of response.data) {
                console.log(empleado.oficio);
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
                <h1>Lista de Empleados por Oficio</h1>
                <select ref={this.busqueda} onSubmit={this.loadEmpleadosByOficio}>
                    {
                        this.state.oficios.map((oficio, index) => {
                            return <option key={index} value={oficio}>{oficio}</option>;
                        })
                    }
                </select>
                <button>Mostrar</button>
                <hr></hr>
                {

                }
            </div>
        )
    }
}

export default EmpleadosOficio