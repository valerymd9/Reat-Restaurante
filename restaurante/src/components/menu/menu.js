import React, { Component } from "react";
import '../styles/menu.css';

class Menu extends Component {
    render(props) {
        return ( <
            >
            <
            div className = "country" >
            <
            img src = { this.props.imagen }
            alt = "Imagen del plato" / >
            <
            h1 > Nombre: { this.props.nombreplato } < /h1> <
            label className = "color" > Descripción { this.props.descripcion } < /label> <
            /div> <
            />
        );
    }
}

export default Menu;