import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

class Navigation extends Component {
  render() {
      return (
        <div className="container col-md-12">
          <div className="row">
            <div className="header col-md-12">
              <h1>BlockChain, Logistica y Transporte</h1>
            </div>
          </div>
          <nav className="navbar">
            <div className="container-fluid col-md-12">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"><div className="span">BLT</div></a>
              </div>
              <ul className="nav navbar-nav">
                <li><NavLink to="/"><p className="glyphicon glyphicon-home"> Pagina Principal</p></NavLink></li>
                <li><NavLink to="/homeC"><p className="glyphicon glyphicon-user"> Home Cliente</p></NavLink></li>
                <li><NavLink to="/homeProv"><p className="glyphicon glyphicon-phone"> Home Proveedor</p></NavLink></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/login"><p className="glyphicon glyphicon-user"> Iniciar Sesión</p></NavLink></li>
                <li><NavLink to="/registroCli"><p className="glyphicon glyphicon-floppy-disk"> Registro Cliente</p></NavLink></li>
                <li><NavLink to="/registroProv"><p className="glyphicon glyphicon-floppy-disk"> Registro Proveedor</p></NavLink></li>
              </ul>
            </div>
          </nav>
          </div>
      );
    }

}

export default Navigation;
