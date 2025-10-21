import React, { Component } from 'react'

class TablaMultiplicar extends Component {
  state = {
    tabla: []
  }

  generarTablaMultiplicar = () => {
    let aux = [];
    let numero = this.props.numero;

    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      aux.push(`${numero} x ${i} = ${resultado}`);
    }

    this.setState({
      tabla: aux
    })
  }

  componentDidMount = () => {
    this.generarTablaMultiplicar();
  }

  componentDidUpdate = (oldProps) => {
    // Comprobamos si hemos recibido un nuevo numero
    if (oldProps.numero !== this.props.numero) {
      this.generarTablaMultiplicar();
    }
  }

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <p>Número recibido: {this.props.numero}</p>
        <ul style={{listStyle: "none"}} >
          {
            this.state.tabla.map((num,index) => {
              return <li key={index}>{num}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TablaMultiplicar;