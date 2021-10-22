import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, } from 'react-bootstrap';
export default class Header extends React.Component {

    render() {

        return (


            <
            Navbar className = "navbar1" >
            <
            Container >
            <
            Navbar.Brand href = "#home" > Restaurante D 'Gusto</Navbar.Brand> <
            Nav className = "me-auto my-2 my-lg-0" >
            <
            Nav.Link href = "#home" > Home < /Nav.Link> <
            Nav.Link href = "#features" > Quienes somos < /Nav.Link> <
            Nav.Link href = "#pricing" > Menu < /Nav.Link> <
            Nav.Link href = "#contact" > Contactanos < /Nav.Link> <
            /Nav> <
            /Container> <
            /Navbar>
        )

    }



}