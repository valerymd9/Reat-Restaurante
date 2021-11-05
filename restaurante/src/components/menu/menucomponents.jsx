import React from "react";
import '../styles/menu.css';
import Menu from '../menu/menu';

import { menuData } from '../menu/menudata';

const Listmenu = () => {
  return (
    <>
    <div align="center" className="menu-1">
                  <h1 class="custom_heading">MENU D'GUSTO</h1>
      {menuData.map((data, id) => {
        return (
          <tl>
          <div align="center" id={id} key={id} className="menu-2">
            <Menu
              nombreplato={data.name}
              precio={data.price}
              descripcion={data.description}
              image={data.image}
              
            />
            <label for="qty-1">Cantidad</label>
            <input type="number" name="qty-1" id="qty-1" class="qty" value="1" min="1" max="10"/>
            
            <button>Agregar al carrito</button>
          </div>
          </tl>
        );
      })}
      </div>
      
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
        <div className="menu-container">
          <Listmenu />
        </div>
      </>
    );
  }
}

export default menuContainer;