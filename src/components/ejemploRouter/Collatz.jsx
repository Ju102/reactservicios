import React, { Component } from 'react'

class Collatz extends Component {

    state = {
        lista: []
    }

    loadCollatz = () => {
        var numero = this.props.numero;
        var aux = [this.props.numero];

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
                aux.push(numero);
            }
            else {

                numero = (numero * 3) + 1;
                aux.push(numero);
            }
        }
        this.setState({
            lista: aux
        })
    }

    componentDidMount = () => {
        this.loadCollatz();
    }

    render() {
        return (
            <div>
                <ul style={{listStyle: "none"}}>
                    {
                        this.state.lista.map((numero, index) => {
                            return <li key={index}>{numero}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Collatz;