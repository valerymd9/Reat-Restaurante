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
                  <li>342-420-6969</li>
                  <li>Moscow, Russia</li>
                  <li>123 Streeet South North</li>
                </ui>
              </div>
              {/* Column2 */}
              <div className="col">
                <h4>Servicios</h4>
                <ui className="list-unstyled">
                  <li>DANK MEMES</li>
                  <li>OTHER STUFF</li>
                  <li>GUD STUFF</li>
                </ui>
              </div>
              {/* Column3 */}
              <div className="col">
                <h4>Contactanos</h4>
                <ui className="list-unstyled">
                  <li>DANK MEMES</li>
                  <li>OTHER STUFF</li>
                  <li>GUD STUFF</li>
                </ui>
              </div>
                {/* Column4 */}
              <div className="col">
                <h4>Redes Sociales</h4>
                <ui className="list-unstyled">
                  <li>DANK MEMES</li>
                  <li>OTHER STUFF</li>
                  <li>GUD STUFF</li>
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
