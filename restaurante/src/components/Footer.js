import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';


export default class Footer extends React.Component {

    render() {

        return (

          <footer className="footer">
          <Card className="text-center">
          <Card.Header >Footer</Card.Header>
          <Card.Body>
            <Card.Title>Servicios D´Gusto</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Todos los derechos Reservados 2021</Card.Footer>
        </Card>
        </footer>
                );
              

   }   }
