export const Personal = (props) => {

    return (
        <>
            <div align="center" id={props.id}  className="col-md-3">
                <img src={props.img} alt=""  class="bd-placeholder-img rounded-circle " width="160 " height="140 " />
                <h2>{props.titulo}</h2>
                <p>{props.name}</p>
            </div>
        </>
    );
}