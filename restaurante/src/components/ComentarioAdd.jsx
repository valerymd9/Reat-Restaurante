import React from 'react';
import './styles/reserva.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export default class Comentario extends React.Component {
    render() {
return(
<div class="container ">
<h1 class="custom_heading">Deja tu Comentario</h1>

<Form className="border-1">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Correo Electronico</Form.Label>
    <Form.Control type="email" placeholder="ingresa tu email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="Nombre y Apellido" />
  </Form.Group>
    <Form.Group className="mb-3" controlId="Comentario">
    <Form.Label>Comentario</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button className="custom_dark-btn text-white" type="submit">
    Publicar Comentario
  </Button>
</Form>
</div>


);
    }
}
