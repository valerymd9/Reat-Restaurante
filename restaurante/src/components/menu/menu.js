import React, { Component } from "react";
import '../styles/menu.css';
import 'bootstrap/dist/css/bootstrap.css';


class Menu extends React.Component {

    render(props) {
        return ( <
            >
            <
            div align = "center" >
            <
            img src = { this.props.image }
            alt = "Imagenplato" / >
            <
            h1 > { this.props.nombreplato } < /h1> <
            label > Precio { this.props.precio } < /label> <
            br / >
            <
            label > descripcion: { this.props.descripcion } < /label> <
            /div> <
            />
        );
    }
}

export default Menu;