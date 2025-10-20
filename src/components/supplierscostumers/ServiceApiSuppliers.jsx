import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

class ServiceApiSuppliers extends Component {

    busqueda = React.createRef();

    state = {
        suppliers: [],
        supplier: null
    }

    urlSuppliers = Global.urlNorthwind;
    request = "/Suppliers";

    loadSuppliers = () => {
        console.log("Antes del servicio");

        axios.get(this.urlSuppliers + this.request).then(response => {
            console.log("Leyendo servicio...");
            this.setState({
                suppliers: response.data.value
            });
        })
    }

    buscarSupplier = (event) => {
        event.preventDefault();
        console.log("Busqueda iniciada.");
        var search = parseInt(this.busqueda.current.value);

        axios.get(this.urlSuppliers + this.request).then(response => {
            console.log("Leyendo servicio...");
            for (var obj of response.data.value) {
                if (obj.SupplierID == search) {
                    this.setState({
                        supplier: obj
                    });
                    break;
                }
            }
        })
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
                            console.log(suppl);
                            return <li key={index}>ID {suppl.SupplierID}: {suppl.ContactName}</li>
                        })
                    }
                </ul>
                <hr></hr>
                <h3>Búsqueda</h3>
                <form onSubmit={this.buscarSupplier}>
                    <label>Introduce el ID: </label>
                    <input type='text' ref={this.busqueda}></input> <br /><br />
                    <button>Buscar</button>
                    <br /><br />
                </form>
                <br />
                {
                    this.state.supplier &&
                    (<table border="1">
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
                            <tr>
                                <td>{this.state.supplier.SupplierID}</td>
                                <td>{this.state.supplier.CompanyName}</td>
                                <td>{this.state.supplier.ContactName}</td>
                                <td>{this.state.supplier.ContactTitle}</td>
                                <td>{this.state.supplier.Address}</td>
                                <td>{this.state.supplier.City}</td>
                                <td>{this.state.supplier.Country}</td>
                                <td>{this.state.supplier.Phone}</td>
                            </tr>
                        </tbody>
                    </table>)
                }
            </div>
        )
    }
}

export default ServiceApiSuppliers;