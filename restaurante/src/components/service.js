export const Servicios = (props) => {

    return (
        <>
            <div align="center" id={props.id}  className="col-md-3">
                            <div class="card">
                        <img src={props.image} class="card-img-top" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{props.name}</h5>
                            <p class="card-text">
                                {props.description}
                            </p>
                            <div class="custom_dark-btn">
          Más Información
          </div>

                       
                </div>
                </div>
                </div>
        </>
    );
}