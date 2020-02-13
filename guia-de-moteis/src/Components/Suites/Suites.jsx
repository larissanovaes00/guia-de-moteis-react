import React, { Component } from "react";
import "./Suites.scss";

export default class Suites extends Component {
    render () {
       
        return (
            <div className="suites">
                <div className="col-10 offset-1 d-flex justify-content-around align-items-center">
                    <div>
                        <h2 className="font-32 color-white text-left">Nossas Suítes</h2>
                        <p className="font-14 color-white text-left">Quando você conhecer, não vai mais querer sair</p>
                    </div>
                    <div>
                        <button className="custom-button">ver todas as suítes</button>
                    </div>
                </div>

                <div className="col-12">
                    teste
                </div>


            </div>
        )
    }
}