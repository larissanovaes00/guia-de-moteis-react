import React, { Component } from "react";
import "./Banner.scss";
import Carousel from 'react-bootstrap/Carousel';
import bannerImg from "../../assets/img/banner-img@2x.png"

export default class Banner extends Component {
    render () {
       
        return (
            <div className="banner">
                <div id="overlay">  </div>
                    <Carousel>

                        <Carousel.Item>
                            <img className="d-block w-100" src={bannerImg} alt="First slide" />
                            <Carousel.Caption>
                                <h3 className="font-48">Descontos <br/>
                                    & Cortesias
                                </h3>
                                <button className="custom-button m-30 top">Conferir</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={bannerImg} alt="First slide" />
                            <Carousel.Caption>
                                <h3 className="font-48">Descontos <br/>
                                    & Cortesias
                                </h3>
                                <button className="custom-button m-30 top">Conferir</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={bannerImg} alt="First slide" />
                            <Carousel.Caption>
                                <h3 className="font-48">Descontos <br/>
                                    & Cortesias
                                </h3>
                                <button className="custom-button m-30 top">Conferir</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
               
            </div>
        )
    }
}