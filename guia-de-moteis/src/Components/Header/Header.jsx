import React, { Component } from "react";
import "./Header.scss";
import logo from '../../assets/img/logo.png';
import facebookLogo from '../../assets/img/facebook.svg';

export default class Header extends Component {
    render () {
        return (
            <div className="header">
                <nav className="col-12 p-0 d-flex justify-content-between">
                    <div className="col-12 col-sm-4 col-lg-3 d-flex justify-content-center align-items-center">
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="d-none d-xl-flex col-8">
                        <ul className="col-12 p-0 d-flex justify-content-between align-items-center">
                            <li className="m-20 right">Início</li>
                            <li className="m-20 right">Nossas Suítes</li>
                            <li className="m-20 right">O Motel</li>
                            <li className="m-20 right">Cortesias</li>
                            <li className="m-20 right">Contato</li>
                            <li>Localização</li>
                        </ul>
                    </div>
                    <div className=" d-none d-sm-flex facebook-icon-block">
                        <img src={facebookLogo} alt="facebook"/>
                    </div>
                </nav>
            </div>
        )
    }
}