import React from "react";
import '../styles/menu.css';
import Menu from '../menu/menu';

import { menuData } from '../menu/menudata';

const Listmenu = () => {
  return (
    <>
      {menuData.map((data, id) => {
        return (
          <div id={id} key={id}>
            <Menu
              nombreplato={data.name}
              Precio={data.description}
              descripcion={data.price}
              imagen={data.image}
            />
            <button>Agregar al carrito</button>
          </div>
        );
      })}
    </>
  );
};

class menuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    this.consultamenu();
  }

  consultamenu = async () => {
    try {
      const res = await fetch("http://localhost:3000/data/menu.json");
      const data = await res.json();
      this.setState({ data: data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="country-container">
          <Listmenu />
        </div>
      </>
    );
  }
}

export default menuContainer;