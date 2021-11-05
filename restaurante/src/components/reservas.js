import React from 'react';
import './styles/reserva.css';
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from "emailjs-com";
import swal from "sweetalert";


export default class Reservar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.sendEmail = this.sendEmail.bind(this);
      }
    
      sendEmail(event) {
        event.preventDefault();
    
        emailjs
          .sendForm(
            "service_u3c243x",
            "template_ss9ekej",
            event.target,
            "user_N1QLAPwmzBi4e4Kiszev7"
          )
          .then(
            (result) => {
              swal({
                icon: "success",
                title: "¡Su reserva ha sido realizada con Exito.!",
                text: "Pronto nos comunicaremos contigo",
              });
              event.target.reset();
            },
            (error) => {
              swal({
                icon: "error",
                title: "ERROR",
                text: "Verifica Nuevamente tu Reserva!",
              });
            }
          );
      }

    render() {
return(

    <section class="contact_section layout_padding">

    <div class="container">
        <div class="texto">
            <h2 class="font-weight-bold">
                Reservas
            </h2>
            <p>Las reservas estan sujetas a la disponibilidad, recuerda que te llegara un correo de confirmación.
            </p>
            <p><b>Puedes cancelar dos horas antes del horario escogido, recuerda que los horarios son de martes a domingo de 8am a 10pm.</b></p>
            <p><b>Las reservas se hacen con un mínimo de 1 persona o máximo de 15 personas</b></p>
        </div>
        <div class="row">
            <div class="col-md-8 mr-auto">

                <form onSubmit={this.sendEmail}>
                   <div class="contact_form-container">
                            <div>
                                <div>
                                   <input id="toNameR" type="text" name="nombre" minlength="10" maxlength="30" placeholder="Nombre completo"/>
                                </div>
                                <div>
                                <input id="telefono" type="text" name="telefono" placeholder="Número de contacto"/>
                                </div>
                                <div>
                                    <input  id="toEmailR" type="email" name="correo" placeholder="Correo electronico"/>
                                </div>


                                <div class="frm-row">
                                    <div class="section colm colm6">
                                        <label for="cantidad" class="field-label">Cantidad de personas</label>
                                        <label  for="cantidad" class="field prepend-icon">
                                            <input id="cantidadR" name="cantidad" type="number" min="1" max="15"
                                                placeholder="-"/>

                                        </label>
                                    </div>
                                </div>
                                
                                    <label for="fechaHora" class="field-label">Fecha de la reserva</label>
                                   <label for="fechaHora"><input id="fecha" type="date" name="fecha" /></label>
                            
                                <br/>

                                <div>
                                    <label for="servicios">Servicios:</label>
                                    <select id="toServiceR" type="text" name="evento" placeholder="Evento">
                                        <option value="-">-</option>
                                        <option value="cumpleaños">Celebracion de cumpleaños</option>
                                        <option value="aniversario">Aniversarios</option>
                                        <option value="fiesta infantil">Fiestas Infantiles</option>
                                        <option value="Propuestas">Declaraciones o propuestas</option>
                                        <option value="Despedidas">Despedidas</option>
                                        <option value="Amigos">Cena con amigos</option>
                                        <option value="Ninguno">Ninguno</option>
                                    </select>
                                </div>
                                <br/>
                                <br/>
                                <textarea id="toComentR" name="comentario"  rows="10" cols="50" placeholder="Comentarios y/o solicitudes especiales" required></textarea>
                                <br/>
                                <br/>
                                <div class="checkbox">
                                    <label for="check"><input type="checkbox" id="data" required /> <span>Acepto la
                                            politica de
                                            tratamiento de datos personales</span></label>
                                </div>


                                <div class="mt-5">
                                    <button type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
</section>


);


    }}