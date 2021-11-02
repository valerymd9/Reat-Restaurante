import React from 'react';
import './styles/reserva.css';
import 'bootstrap/dist/css/bootstrap.css';



export default class Reservar extends React.Component {
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

                <form action="">
                    <div class="contact_form-container">
                        <div>
                            <div>
                                <input type="text" id="toNameR" minlength="10" maxlength="30" placeholder="Nombre completo" required/>
                            </div>
                            <div>
                                <input type="text" id="toNumberR" placeholder="Número de contacto"/>
                            </div>
                            <div>
                                <input type="email" id="toEmailR" required placeholder="Correo electronico"/>
                            </div>


                            <div class="frm-row">
                                <div class="section colm colm6">
                                    <label for="cantidad">Cantidad de personas</label>
                                    <label  for="cantidad">
                                        <input type="number" id="cantidadR" required min="1" max="15"
                                            placeholder="-"/>

                                    </label>
                                </div>
                            </div>
                            <div>
                                <label for="fechaHora">Fecha de la reserva</label>
                                <label for="fechaHora">
                                <input type="datetime-local" id="fechaR" value="fecha" name="dia" min="2021-01-01"
                                    max="2021-12-31"/></label>
                            </div>

                            <br/>

                            <div>
                                <label for="servicios">Servicios:</label>
                                <select type="text" name="servicios" id="toServiceR" placeholder="Evento">
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
                            <textarea name="coments" id="toComentR" rows="10" cols="50" placeholder="Comentarios y/o solicitudes especiales" required></textarea>
                            <br/>
                            <br/>
                            <div class="checkbox">
                                <label for="check"><input type="checkbox" id="data" required /> <span>Acepto la
                                        politica de
                                        tratamiento de datos personales</span></label>
                            </div>


                            <div class="mt-5">
                                <button type="submit" onclick='sendReservas()'>
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