import React from 'react';
import './styles/login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export default class Login extends React.Component {
    render() {
    
    return(
<div className="textlogin">
<Form>
     <Form.Group className="mb-3" controlId="login">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="text" placeholder="Ingresar Usuario" required />
    <Form.Text className="text-muted">
      No compartas tu usuario con Nadie
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordar Contraseña" />
  </Form.Group>
  <Button variant="primary" className="btn-dark" type="submit">
    Iniciar sesión
  </Button>
</Form>
</div>
             )

     }
}

