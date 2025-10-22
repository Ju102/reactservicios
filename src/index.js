import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import $ from 'jquery'; // Importa jQuery. No necesaria si no uso React
import Popper from 'popper.js'; // Importa Popper.js
import 'bootstrap/dist/js/bootstrap.bundle'; // Importa los scripts de Bootstrap
import HospitalesMultiple from './components/HospitalesMultiple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{textAlign: "center", margin: "20px", backgroundColor: "lightblue"}}>
        <HospitalesMultiple />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
