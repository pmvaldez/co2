import React from 'react';
import logo from '../img/logo1.png'
import '../style/navbar.css'

function Navbar() {

    return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top colornav">
        <img src={logo} width="80" height="80" alt="" className="navbar-brand" href="./"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="./Home">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="./MiHuella">Mi Huella</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;