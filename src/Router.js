import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/ejemploRouter/Home';
import TablaMultiplicar from './components/ejemploRouter/TablaMultiplicar';
import NotFound from './components/ejemploRouter/NotFound';
import { useParams } from 'react-router-dom';
import Collatz from './components/ejemploRouter/Collatz';
import MenuRutas from './components/ejemploRouter/MenuRutas';

class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            // Esta funcion sirve para capturar los parametros recibidos
            // en una ruta y enviarlos con props a nuestro component
            let { num } = useParams();

            // Devolvemos el component TablaMultiplicar con sus props
            return <TablaMultiplicar numero={num}></TablaMultiplicar>
        }

        function CollatzElement() {
            let { factor } = useParams();

            return <Collatz numero={factor}></Collatz>
        }

        return (
            <BrowserRouter>
                <MenuRutas></MenuRutas>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/tabla/:num" element={<TablaMultiplicarElement></TablaMultiplicarElement>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                    <Route path="/collatz/:factor" element={<CollatzElement></CollatzElement>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;