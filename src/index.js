import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router'
import MenuRutas from './components/ejemploRouter/MenuRutas';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{textAlign: "center"}}>
        <MenuRutas></MenuRutas>
        <Router></Router>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
