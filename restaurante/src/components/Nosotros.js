import React from 'react';
import './styles/nosotros.css';
import img from '../assets/images/Restaurante.jpg';

export default class Nosotros extends React.Component {
    render() {

        return (
<div class="container">
    <br/>
            <h1 class="custom_heading">NOSOTROS</h1>
            <hr/>
            <br/>
            <div class="row_featurette">
                <div class="col-md-7">
                    
                    <h2><b>Reseña Historia D'GUSTO</b></h2>
                
                    <div class="text">
                        <hr/>
                        <p align="justify">
                            En septiembre de 1982, empezó la historia del Restaurante D’GUSTO cuando nació en la variante de Las Palmas, Colombia. Se buscaba dotar a la ciudad de un espacio acogedor para familias, empresarios y turistas, que reflejara la cultura de las regiones
                            y a la vez ofrecer a los visitantes lo mejor de nuestra comida típica colombiana (Bandeja Paisa, Ajiaco, Sancocho, Mondongo, Sudado, etc.) complementada con asados (llamados “Planchitas” en D’GUSTO). Poco tiempo después, a
                            los 2 años, las Palmas demandó más sedes para prestar servicio a los ejecutivos que trabajaban en el Centro de la ciudad, y en el año 2000 apareció la sede del Centro Comercial Oviedo. En octubre de 2018 abrió D´GUSTO en Envigado.
                            Todas siguen abiertas el día de hoy y con Servicio a Domicilio.
                            <br/>
                            <br/>
                            Hoy en día es considerado uno de los mejores restaurantes de las Palmas y Colombia. Durante el tiempo que ha prestado servicio, D’GUSTO ha logrado importantes premios y reconocimientos, entre otros ser destacado como el Restaurante con Mejor Servicio
                            para Antioquia (Premios La Barra 2020), el Mejor Restaurante de Antioquia (Premios La Barra 2011) y el Premio Rosa de Los Vientos de la Asociación Colombiana de Periodistas de Turismo ACOPET en sus veinticinco años. Hoy en
                            día, Hatoviejo sigue siendo reconocido por su gastronomía con un menú más amplio incluyendo ensaladas, sopas, cazuelas, postres colombianos, una variada selección de vinos y licores y una serie de platos contemporáneos que
                            incluyen diversos sabores de nuestras tierras.
                        </p>
                              
                        </div>
                 
                    <br/>
                   
                    </div>
                    <div class= "col-md-5">
               <img src={img} width="500" height="500" alt="Imagen Restaurante"/>
               </div>
                    
                </div>
                <hr/>
                </div>




        );


    }
}
