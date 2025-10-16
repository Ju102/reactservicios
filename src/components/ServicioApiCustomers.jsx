import React, { Component } from 'react'
import axios from 'axios'

class ServicioApiCustomers extends Component {

  state = {
    customers: []
  }

  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";

  // Creamos un método para cargar los clientes
  loadCostumers = () => {
    console.log("Antes del servicio...");
    axios.get(this.url).then(response => {
      console.log("Leyendo servicio...");
      // La información viene en response.data
      console.log(response.data);
      this.setState({
        customers: response.data.value
      })
    });

    console.log("Después del servicio...");
  }

  componentDidMount = () => {
    console.log("Creando component...");
    this.loadCostumers();
  }

  render() {
    return (
      <div>
        <h1>Servicio de Customers</h1>
        {
          this.state.customers.map((customer, index) => {
            return <h4 key={index} style={{ color: "blue" }}>{customer.ContactName}</h4>
          })
        }
      </div>
    )
  }
}

export default ServicioApiCustomers;