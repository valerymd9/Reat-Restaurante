import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/service.css';
import { Servicios } from './service';
import service from '../data/service.json';

export default class Service extends React.Component {

    render() {
        let ServiceData = service ;
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
                {ServiceData.map(data =>
                            <Servicios id={data.id} image = {data.image} name = {data.name} description = {data.description}></Servicios>
                        )} 
               
                    </div>
                    </div>
            </div>
            
    
    </section>

   

   
           
        );
    }

}