import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Home.css';
import Carousel from 'react-bootstrap/Carousel';


export default class Propuesta extends React.Component {

    render() {

        return (
<div>
            <div class="container">
                <hr/>
            <h2 className="custom_heading">
                El RESTAURANTE: NUESTRA PROPUESTA
            </h2>
<br/><br/>
            <p class="text-center">
                D’GUSTO es un ejemplo de cocina colombiana abierta al mundo. Con una base clásica, donde la comida típica hecha en casa ocupa un lugar esencial, la carta tiene influencias de estilos regionales más amplio.
            </p>
            <p class="text-center">
                El restaurante cuenta con una huerta en el propio recinto, lo que permite servir vegetales y hortalizas frescos y de calidad, cultivados con todos los procedimientos propios de la agricultura ecológica. Así mismo, estratégicamente situado en la terraza,
                un horno de leña cuece diariamente el pan. En este ambiente se puede disfrutar desde una cena romántica a una celebración de 20 amigos sentados todos alrededor de una única mesa, consiguiendo preservar para todos su espacio e intimidad.
            </p>
<br/><hr/>
<section class="service_section">
        
            <br/>
            <h2 class="custom_heading">NUESTROS SERVICIOS</h2>
            <p class="custom_heading-text">
                A continuación encontará los servicios que ofrece el restaurante D'GUSTO:
            </p>
            <br/>
            <div>
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="images/reunion (1).png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Cena con Amigos</h5>
                            <p class="card-text">
                                Icónico y glamuroso, D'GUSTO es el lugar más idóneo para llevar a cabo reuniones empresariales compartiendo momentos únicos mientras disfruta de una experiencia inolvidable.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/pastel-de-cumpleanos.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Cumpleaños</h5>
                            <p class="card-text">
                                En este ambiente se puede disfrutar de un cumpleaños inolvidable con más de 20 invitados sentados alrededor de una única mesa, todos preservando su espacio e intimidad.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/aniversario.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Aniversario</h5>
                            <p class="card-text">
                                Disfruta de las mejores cenas romanticas para celebrar tu aniversario, con los mejores cocteles y platillos que ofrece el restaurante, preseverando su espacio e intimidad.
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                        </div>
                    </div>

                    <br/>
                    <br/>
                  
            </div>
            
    </div>
    </section>
    <br/>
    <hr/>
</div>
    <section class="tasty_section">
        <div class="container_fluid">
            <h2>
                ¡Ven y Disfruta!
            </h2>
        </div>
    </section>
    <hr />
   
     <section class="fruit_section">
        <div class="container">
            <h2 class="custom_heading">MENÚ</h2>
            <p class="custom_heading-text">
                A continuación encontrarás los platos mas representativos de la carta D'GUSTO
            </p>
            <div class="row layout_padding2">
                <div class="col-md-8">
                    <div class="fruit_detail-box">
                        <h3>
                            Sancocho de Gallina
                        </h3>
                        <p class="mt-4 mb-5">
                            Acompañado con arroz, banano, aguacate y arepa. Sancocho preparado con papa, yuca, plátano y mazorca.<strong> $27,200 Cop</strong>
                        </p>
                        <a href="" class="custom_dark-btn">
                Reservar Ahora
              </a>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <div class="fruit_img-box d-flex justify-content-center align-items-center">
                        <img src="images/Sancocho.jpg" alt="" class="" width="250px" />
                    </div>
                </div>
            </div>
            <div class="row layout_padding2">
                <div class="col-md-8">
                    <div class="fruit_detail-box">
                       <br/>
                        <h3>
                            Bandeja Paisa
                        </h3>
                        <p class="mt-4 mb-5">
                            Eata bandeja pemite reconocer y dar tributo a las grandes y majestuosas montañas antioqueñas. La bandeja Paisa trae frijol, arroz, carne molida, chorizo, morcilla, chicharrón, huevo frito, tajada de maduro, ensalada, aguacate y arepa.<strong> $33.000 Cop</strong>
                        </p>
                        <div>
                            <a href="" class="custom_dark-btn">
                Reservar Ahora
              </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <div class="fruit_img-box d-flex justify-content-center ">
                        <img src="images/bandeja Paisa.jpg" alt="" class="" width="250px" />
                    </div>
                </div>
            </div>
            <div class="row layout_padding2-top layout_padding-bottom">
                <div class="col-md-8">
                    <div class="fruit_detail-box">
                        <br/><h3>
                            Cazuela de Mariscos
                        </h3>
                        <p class="mt-4 mb-5">
                            Con nuestra cazuela de mariscos, le hacemos un tributo a nuestros dos océanos, evocando los sabores de nuestras costas. Trae langostinos U10, camarones, calamares y caracol. Es acompañada con arroz con coco y aguacate. <strong> $60.000 Cop</strong>
                        </p>
                        <div>
                            <a href="" class="custom_dark-btn">
                Reservar Ahora
              </a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <div class="fruit_img-box d-flex justify-content-center align-items-center">
                        <img src="images/Cazuela (1).jpg" alt="" class="" width="250px" />
                    </div>
                </div>
            </div>
        </div>
    </section>
<br/>
<hr/>
<h1 className="custom_heading">TESTIMONIOS</h1>

<Carousel variant="dark">
  <Carousel.Item>
  <div class="client_container">
 <div class="client_img-box">
    <img
      className="d-block w-100"
      src="images/Cliente1.png"
      alt="First slide"
    />
    </div>
    </div>
    <div className="client_detail">
        <br/> <br/> <br/><br/> <br/> <br/>
    <Carousel.Caption>
      <h3>Alison Delgado</h3>
      <p className="custom_heading-text"> Muy buen atendimiento, nos dejaron reservar unas horas antes mientras dábamos una vuelta por el pueblo, comida excelente, muy buen atendimiento, siempre que voy a D'GUSTO<br /> El mejor servicio, esta super recomendado
                                        el lugar, espero volver pronto.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="client_container">
 <div class="client_img-box">
    <img
      className="d-block w-100"
      src="images/client.png"
      alt="First slide"
    />
    </div>
    </div>
    <div className="client_detail">
        <br/> <br/> <br/><br/> <br/> <br/>
    <Carousel.Caption>
      <h3>Juan Rodriguez Guzman</h3>
      <p className="custom_heading-text">  ¡Me encanta comer en D’GUSTO nunca falla el tataki de atún! Está todo buenísimo. Las hamburguesas de salmón buenísimas, siempre tienen algo diferente. Precio acorde a la calidad, no para ir todos los días,<br /> pero sí que un par de veces en el mes.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="client_container">
 <div class="client_img-box">
    <img
      className="d-block w-100"
      src="images/Cliente2.png"
      alt="First slide"
    />
    </div>
    </div>
    <div className="client_detail">
        <br/> <br/> <br/><br/> <br/> <br/>
    <Carousel.Caption>
      <h3>Edgar Meza</h3>
      <p className="custom_heading-text">  He tenido el placer de comer tanto en mesa como en la barra y siempre he salido muy contenta y satisfecha. Cocina mediterránea y tradicional andaluza, buena carta de vinos y productos frescos. El personal es muy atento y muy profesional. Mi familia y
                                        yo hemos celebrado algunos eventos en este restaurante, deja muy buena impresión y buen sabor de boca. La relación calidad/precio es buena.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>

<br/> 
<hr/>

<div class="container">
    <h1 className="custom_heading"> ¿Donde estámos Ubicados?</h1>
    <p className="custom_heading_text">Estamos ubicados en la siguiente dirección:</p>
        <div class="row">
            <div class="col-md-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8962714717486!2d-77.27336348554137!3d1.2318175991015279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed46f0a46b44f%3A0x239dc56d31fed1cb!2sCl.%2035%2C%20Pasto%2C%20Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1631913556776!5m2!1ses!2sco"
                    width="1200" height="450"  allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
        </div>
        );

    }
}