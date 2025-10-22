import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios';

class HospitalesMultiple extends Component {

    selectHospital = React.createRef();
    aumentoSalario = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    url = Global.apiTrabajadores;

    loadHospitales = () => {
        var request = "api/Hospitales/";

        axios.get(this.url + request).then((response) => {
            console.log("Leyendo datos de hospitales...");
            this.setState({
                hospitales: response.data
            });
        });
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();

        let aux = [];

        let opciones = this.selectHospital.current.options;

        for (var opcion of opciones) {
            if (opcion.selected) {
                aux.push(opcion.value);
            }
        }

        this.setState({
            hospitalesSeleccionados: aux
        })

    }

    updateSueldosHospitalesSeleccionados = (event) => {
        event.preventDefault();

        let request = "api/trabajadores/UpdateSalarioTrabajadoresHospitales?";

        let aumento = parseInt(this.aumentoSalario.current.value);

        let data = "incremento=" + aumento + "&";

        let seleccion = this.selectHospital.current.options;

        for (var opcion of seleccion) {
            if (opcion.selected) {
                data += "idhospital=" + opcion.value + "&";
            }
        }

        data = data.substring(0, data.length - 1);

        request += data;

        console.log(this.url + request)

        axios.put(this.url + request).then((response) => {
            console.log("Datos actualizados con exito");
            this.loadHospitales();
        })




    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    render() {
        return (
            <div style={{ alignItems: "center" }}>
                <h2>Mostrar Hospitales</h2>
                <form onSubmit={this.getHospitalesSeleccionados}>
                    <select ref={this.selectHospital} className='form-control w-25 m-auto' size="4" multiple>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (<option key={index} value={hospital.idHospital} >{hospital.nombre}</option>)
                            })
                        }
                    </select>
                    <button className='btn btn-success mt-3'>Mostrar</button>
                </form>

                <form onSubmit={this.updateSueldosHospitalesSeleccionados}>
                    <div className='form-group m-3'>
                        <label className='form-label'>Introduzca aumento: </label>
                        <input className='form-control w-25 m-auto' type='text' ref={this.aumentoSalario} />
                    </div>
                    <button className='btn btn-success' >Enviar</button>
                </form>

                <hr />
                {
                    this.state.hospitalesSeleccionados.length !== 0 &&
                    <Trabajadores idhospitales={this.state.hospitalesSeleccionados}></Trabajadores>
                }
            </div>
        )
    }
}

export default HospitalesMultiple