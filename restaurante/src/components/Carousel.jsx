import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import restaurant from '../assets/images/restaurant.jpg';
import restaurante from '../assets/images/Restaurante.jpg';
import gourmet from '../assets/images/gourmet.jpg';



export default class Inicio extends React.Component {

    render() {

        return (
<Carousel variant="dark">
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={restaurante}
      alt="Second slide"
      height="420"
    />
    <Carousel.Caption>
      <h1 className=" custom_heading text-white">BIENVENIDOS A D´GUSTO</h1>
      <h3 className="custom_heading text-white">Encontraras las mejores Comidas del Pais</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={restaurant}
      alt="First slide" height="420"
    />
       <Carousel.Caption>
      <h5></h5>
      <p ></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gourmet}
      alt="Third slide"
      height="420"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

        );
    }
}