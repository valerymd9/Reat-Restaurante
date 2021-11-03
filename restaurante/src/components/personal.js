import React from 'react';
import './styles/personal.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Personal } from '../components/EquipoTrabajo';
import personal from '../data/personal.json';



export default class Equipo extends React.Component {
    render() {
        let personalData = personal ;
        return (

<section id="equipo">
                <div className="container todo ">
                    <div className="contenido-nosotros mt-5">
                        <h1 className="custom_heading">EQUIPO DE TRABAJO D'GUSTO</h1>
                        <p align="center">A continuación presentamos al equipo de trabajo del restaurante D'GUSTO:</p>
                    </div>
                    <div className="row ">

                        {personalData.map(data =>
                            <Personal id={data.id} img = {data.img} titulo = {data.titulo} name = {data.name}></Personal>
                        )} 
                    </div>
                </div>
                <hr/>
        </section>
    

        );
    }
}