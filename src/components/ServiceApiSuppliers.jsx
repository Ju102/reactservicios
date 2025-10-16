import axios from 'axios';
import React, { Component } from 'react'

class ServiceApiSuppliers extends Component {

    busqueda = React.createRef();

    state = {
        suppliers: [],
        supplier: null
    }

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers/";

    loadSuppliers = () => {
        console.log("Antes del servicio");

        axios.get(this.url).then(response => {
            console.log("Leyendo servicio...");
            console.log("Servicio inicial: " + response.data);
            this.setState({
                suppliers: response.data.value
            });
        })
    }

    buscarSupplier = (event) => {
        event.preventDefault();
        console.log("Busqueda iniciada.");
        var search = this.busqueda.value;
        var aux = this.state.suppliers;
        console.log(aux);
        for (var obj in aux) {
            console.log("Viendo objeto: " + obj.SupplierID)
            if (obj.SupplierID === search) {
                console.log("Objeto encontrado con exito:" + obj);
                this.setState({
                    supplier: obj.value
                });
            }
        }

    }

    componentDidMount = () => {
        console.log("Componente se montó correctamente");
        this.loadSuppliers();
    }

    render() {
        return (
            <div>
                <h1>Servicio de Suppliers</h1>
                <ul>
                    {
                        this.state.suppliers.map((suppl, index) => {
                            return <li key={index}>{suppl.SupplierID}: {suppl.ContactName}</li>
                        })
                    }
                </ul>
                <hr></hr>
                <h3>Búsqueda</h3>
                <form onSubmit={this.buscarSupplier}>
                    <label>Introduce el ID: </label>
                    <input type='text' ref={this.busqueda} /><br /><br />
                    <button>Buscar</button>
                    <br /><br />
                </form>
                <br />
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Compañia</th>
                            <th>Contacto</th>
                            <th>Titulo de Contacto</th>
                            <th>Dirección</th>
                            <th>Ciudad</th>
                            <th>País</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceApiSuppliers;