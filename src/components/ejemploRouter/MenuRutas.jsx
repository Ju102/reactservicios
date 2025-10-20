import React, { Component } from 'react'

class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/tabla/2'>Tabla del 2</a></li>
                    <li><a href='/tabla/5'>Tabla del 5</a></li>
                    <li><a href='/tabla/8'>Tabla del 8</a></li>
                    <li><a href='/tabla/9'>Tabla del 9</a></li>
                    <li><a href='/collatz/6'>Collatz 6</a></li>
                    <li><a href='/collatz/57'>Collatz 57</a></li>
                    <li><a href='/collatz/86'>Collatz 86</a></li>
                    <li><a href='/collatz/100'>Collatz 100</a></li>

                </ul>
            </div>
        )
    }
}

export default MenuRutas