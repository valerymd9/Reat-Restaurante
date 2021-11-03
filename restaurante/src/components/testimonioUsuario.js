import React from 'react';
import './styles/testimonios.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Testimonio } from '../components/testimonios';
import testimonio from '../data/testimoniosUsuarios.json';

export default class TestimonioU extends React.Component {
    render() {
        let testimonioData = testimonio ;
        return (
            <section class="client_section">
            <div class="container">
              <h2 class="custom_heading">Testimonios</h2>
              <p class="custom_heading-text">
                Testimonios de clientes de los ultimos seis meses:
              </p>
              <div>
                <div id="carouselExampleControls-2" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="client_container layout_padding2">

                      {testimonioData.map(data =>
                            <Testimonio id={data.id} image = {data.image} nameU = {data.nameU} comentario = {data.comentario}></Testimonio>
                        )} 
                      </div>
            </div>
            <div class="custom_carousel-control">
            <a class="carousel-control-prev" href="#carouselExampleControls-2">
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls-2">
              <span class=""></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
            </div>
      </div>
    </div>
    </div>
  </section>

        );

    }
}