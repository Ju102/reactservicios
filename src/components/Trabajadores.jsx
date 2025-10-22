import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

class Trabajadores extends Component {

    url = Global.apiTrabajadores;

    state = {
        trabajadores: [],
        mensaje: ""
    }

    loadTrabajadores = () => {

        let request = "api/Trabajadores/TrabajadoresHospitales"

        let ids = this.props.idhospitales;

        let data = "";

        for (var id of ids) {
            data += "idhospital=" + id + "&"
        }

        data = data.substring(0, data.length - 1);

        request += "?" + data;

        axios.get(this.url + request).then(response => {
            console.log("Leyendo datos de trabajadores de hospitales seleccionados...");

            this.setState({
                trabajadores: response.data
            });
        })
    }



    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales) {
            console.log("Leyendo datos de nuevo hospital...");
            this.loadTrabajadores();
        }
    }

    render() {
        return (
            <div className='mt-3 p-5'>
                <h3 className='mb-4'>Lista de Trabajadores</h3>
                <table className='table-bordered m-auto'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>ID Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{trabajador.apellido}</td>
                                        <td>{trabajador.oficio}</td>
                                        <td>{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(trabajador.salario)}</td>
                                        <td>{trabajador.idHospital}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Trabajadores;