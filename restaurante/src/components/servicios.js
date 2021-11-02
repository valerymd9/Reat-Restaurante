import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/service.css';

export default class Service extends React.Component {

    render() {

        return (
<section class="service_section">
        <div class="container">
            <br/>
            <h2 class="custom_heading">NUESTROS SERVICIOS</h2>
            <p class="custom_heading-text">
                A continuación encontará los servicios que ofrece el restaurante D'GUSTO:
            </p>
            <br/>
            <div>
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="images/reunion (1).png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Cena con Amigos</h5>
                            <p class="card-text">
                                Icónico y glamuroso, D'GUSTO es el lugar más idóneo para llevar a cabo reuniones empresariales compartiendo momentos únicos mientras disfruta de una experiencia inolvidable.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/pastel-de-cumpleanos.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Cumpleaños</h5>
                            <p class="card-text">
                                En este ambiente se puede disfrutar de un cumpleaños inolvidable con más de 20 invitados sentados alrededor de una única mesa, todos preservando su espacio e intimidad.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/aniversario.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Aniversario</h5>
                            <p class="card-text">
                                Disfruta de las mejores cenas romanticas para celebrar tu aniversario, con los mejores cocteles y platillos que ofrece el restaurante, preseverando su espacio e intimidad.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>

                    <br/>
                    <br/>
                    <div class="margen">
                <div class="card-deck">
                <div class="card">
                        <img class="card-img-top" src="images/pastel-de-cumpleanos.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Despedidas</h5>
                            <p class="card-text">
                                En este ambiente se puede disfrutar de un cumpleaños inolvidable con más de 20 invitados sentados alrededor de una única mesa, todos preservando su espacio e intimidad.
                            </p>
                            <a href="reservas.html" class="custom_dark-btn">
          Más Información
        </a>

                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/aniversario.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Declaraciones o Propuestas</h5>
                            <p class="card-text">
                                Disfruta de las mejores cenas romanticas para celebrar tu aniversario, con los mejores cocteles y platillos que ofrece el restaurante, preseverando su espacio e intimidad.
                            </p>

                            <a href="reservas.html" class="custom_dark-btn">
          Más Información
        </a>

                        </div>
                        </div>
                        <div class="card">
                        <img class="card-img-top" src="images/aniversario.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Fiestas Infaniles</h5>
                            <p class="card-text">
                                Disfruta de las mejores cenas romanticas para celebrar tu aniversario, con los mejores cocteles y platillos que ofrece el restaurante, preseverando su espacio e intimidad.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>
                    
                </div>
               
                    </div>
                    </div>
            </div>
            
    </div>
    </section>

   

   
           
        );
    }

}