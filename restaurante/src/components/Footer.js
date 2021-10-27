import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';


export default class Footer extends React.Component {

    render() {

        return (

          <div className="main-footer">
          <div className="container">
            <div className="row">
              {/* Column1 */}
              <div className="col">
                <h4>Menú</h4>
                <ui className="list-unstyled">
                  <li>Bandeja Paisa</li>
                  <li>Ajiaco</li>
                  <li>Arroz con Coco</li>
                  <li>Cazuela de Mariscos</li>
                  <li>Sancocho</li>
                  <li>Arepas Rellenas</li>
                </ui>
              </div>
              {/* Column2 */}
              <div className="col">
                <h4>Servicios</h4>
                <ui className="list-unstyled">
                  <li>Cumpleaños</li>
                  <li>Despedidas</li>
                  <li>Fiestas infantiles</li>
                  <li>Propuestas</li>
                  <li>Aniversarios</li>
                  <li>Reuniones Empresariales</li>
                </ui>
              </div>
              {/* Column3 */}
              <div className="col">
                <h4>Contactanos</h4>
                <ui className="list-unstyled">
                <li>Dirección:Calle 35 E 25</li>
                  <li>Horario de atención: 8:00 a.m - 10:00 p.m.</li>
                  <li>Reservas: 314578920</li>
                  <li>Email: dgusto@gmail.com</li>
                </ui>
              </div>
                {/* Column4 */}
              <div className="col">
                <h4>Redes Sociales</h4>
                <ui className="list-unstyled">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                 
                </ui>
              </div>
          </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()}| All rights reserved |
                Terms Of Service | Privacy
              </p>
            </div>
          </div>
        </div>
                );
              

   }   }
