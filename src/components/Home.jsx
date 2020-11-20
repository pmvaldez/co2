import React from 'react'
import Navbar from './Navbar'
import '../style/Home.css'
import imgOne from '../img/imgOne.jpg'
import imgTwo from '../img/imgTwo.jpg'

const Home = () => {
    return (
        <div >
            <Navbar/>
            <br/>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#FF5757"/></svg>
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Huella de Carbono</h1>
                                <p>La huella de carbono puede ser abordada dependiendo del enfoque o alcance específico. Para cada uno de estos enfoques existen diferentes protocolos o metodologías reconocidas internacionalmente</p>
                                <p><a className="btn btn-lg btn-primary" href="https://mma.gob.cl/cambio-climatico/cc-02-7-huella-de-carbono/" role="button">Ver mas</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#004AAD"/></svg>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="/Login" role="button">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#545454"/></svg>
                        <div className="container">
                        <div className="carousel-caption text-right">
                            <h1>One more for good measure.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="/Login" role="button">Browse gallery</a></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container marketing">
                <div class="row">
                    <div class="col-lg-4">
                    <img src={imgOne} alt="" class="bd-placeholder-img rounded-circle" width="200" height="200" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <p><a class="btn btn-secondary" href="/MiHuella" role="button">Mide tu Huella &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <img src={imgTwo} alt="" class="bd-placeholder-img rounded-circle" width="200" height="200" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <p><a class="btn btn-secondary" href="/Consultancy" role="button">Nuestro Historial &raquo;</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
