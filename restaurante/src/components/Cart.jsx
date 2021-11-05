import React from "react";
import './styles/cart.css';
import 'bootstrap/dist/css/bootstrap.css';



export default class Carrito extends React.Component {

    render() {

        return (
<section className="container">
<br/>
    <h1 className="custom_heading"> Carrito de Compras </h1>

        <div class="tab-pane fade carrito active show" id="pills-contact">
            <br/>
            <table class="table table-hover" id="toPedidoD">
                <thead>
                    <tr class="text-primary text-dark">
                        <th scope="col">#</th>
                        <th scope="col">Productos</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody class="tbody">

               </tbody>
            </table>
            <br/><br/>
            <div class="row mx-5">
                <div class="col">
                    <h3 class="itemCartTotal text-dark">Total: 0</h3>
                </div>
               
            </div>
            <section class="contact_section layout_padding">
                    <div class="container">
                        <div class= "cont">
                            <h2 class="font-weight-bold">
                                Realiza tu compra Online
                            </h2>
                            <p>El domicilio se entrega en horario laboral
                            </p>
                            <p><b>Muchas gracias por preferirnos</b></p>
                        </div>
                        <div class="row">
                            <div class="col-md-8 mr-auto">

                                <form action="">
                                    <div class="contact_form-container">
                                        <div>
                                            <div>
                                                <input type="text" id="toNameD" minlength="10" maxlength="30"
                                                    placeholder="Nombre completo" required/>
                                            </div>
                                            <div>
                                                <input type="text" id="toNumberD" placeholder="Número de contacto"/>
                                            </div>
                                            <div>
                                                <input type="email" id="toEmailD" required
                                                    placeholder="Correo electronico"/>
                                            </div>
                                            <div>
                                                <input type="text" id="toCiudadD" required placeholder="Ciudad"/>
                                            </div>
                                            <div>
                                                <input type="text" id="toBarrioD" required placeholder="Barrio"/>
                                            </div>
                                            <div>
                                                <input type="text" id="toDirD" required placeholder="Direccion"/>
                                            </div>
                                            <label id="metodoPagoD">Metodo de
                                                pago:</label>
                                            <select id="metodo de pago">
                                                <option value="Contraentrega">
                                                    Contraentrega</option>
                                                <option value="tarjeta">Tarjeta</option>
                                                <option value="tranferencia">
                                                    Tranferencia</option>

                                            </select>
                                            <br/>
                                            <br/>
                                            <textarea name="coments" id="toComentD" rows="10" cols="50"
                                                placeholder="Comentarios y/o solicitudes especiales"
                                                required></textarea>
                                            <br/>
                                            <br/>
                                            <div class="checkbox">
                                                <label for="check"><input type="checkbox" id="data" required />
                                                    <span>Acepto la
                                                        politica de
                                                        tratamiento de datos
                                                        personales</span></label>
                                            </div>


                                            <div class="mt-5">
                                                <button type="submit" onclick='sendDomicilio()'>
                                                    Pedir domicilio
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </section>
        </div>

    </section>    

        );


    }    
}