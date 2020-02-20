import React, { Component } from "react";
import "./Suites.scss";
import suiteImg from "../../assets/img/banner-img.png"
import RowMobile from "../RowMobile/RowMobile";

export default class Suites extends Component {
    render () {
       
        return (
            <div className="suites">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="font-32 color-white text-left">Nossas Suítes</h2>
                        <p className="font-14 color-white text-left">Quando você conhecer, não vai mais querer sair</p>
                    </div>
                    <div className="d-none d-sm-block">
                        <button className="custom-button">ver todas as suítes</button>
                    </div>
                </div>

                <RowMobile />

                <div className="row d-flex flex-wrap p-0 mt-2 c-suites-img">
                    <div className="col-12 col-sm-4 p-sm-0">
                    {/* <div id="overlay" className="col-11"></div>*/ }
                    <img className="suites-img" src={suiteImg} alt=""/>
                    <h3 className="color-white font-22">Suíte Caça Níquel</h3>
                    <p className="color-white font-14">A partir de R$55,00</p>
                    <button className="custom-button">ver suíte</button>
                        
                    </div>

                    <div className="col-12 col-sm-4 pr-sm-0">
                        <img className="suites-img" src={suiteImg} alt=""/>
                    </div>

                    <div className="col-12 col-sm-4 pr-sm-0">
                        <img className="suites-img" src={suiteImg} alt=""/>
                    </div>
                </div>


            </div>
        )
    }
}