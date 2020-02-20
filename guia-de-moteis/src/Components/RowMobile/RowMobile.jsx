import React, { Component } from "react";
import "./RowMobile.scss";

import homeImg from "../../assets/img/icon-home.svg"
import motelImg from "../../assets/img/icon-motel.svg"
import suitesImg from "../../assets/img/icon-suites.svg"
import locationImg from "../../assets/img/icon-location.svg"
import emailImg from "../../assets/img/icon-email.svg"

export default class RowMobile extends Component {
    render () {
        return (
            <div className="d-flex d-sm-none mobile-nav-row" >
                <div className="nav-mobile-item item-active">
                    <img src={homeImg} alt=""/>
                    <span>início</span>
                </div>
                <div className="nav-mobile-item">
                    <img src={motelImg} alt=""/>
                    <span>motel</span>
                </div>
                <div className="nav-mobile-item">
                    <img src={suitesImg} alt=""/>
                    <span>suítes</span>
                </div>
                <div className="nav-mobile-item">
                    <img src={locationImg} alt=""/>
                    <span>local</span>
                </div>
                <div className="nav-mobile-item">
                    <img src={emailImg} alt=""/>
                    <span>contato</span>
                </div>
            </div>
        )
    }
}
       







