import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to='/tabla/2'>Tabla del 2</NavLink></li>
                    <li><NavLink to='/tabla/5'>Tabla del 5</NavLink></li>
                    <li><NavLink to='/tabla/8'>Tabla del 8</NavLink></li>
                    <li><NavLink to='/tabla/9'>Tabla del 9</NavLink></li>
                    <li><NavLink to='/collatz/6'>Collatz 6</NavLink></li>
                    <li><NavLink to='/collatz/57'>Collatz 57</NavLink></li>
                    <li><NavLink to='/collatz/86'>Collatz 86</NavLink></li>
                    <li><NavLink to='/collatz/100'>Collatz 100</NavLink></li>

                </ul>
            </div>
        )
    }
}

export default MenuRutas;