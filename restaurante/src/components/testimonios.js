import './styles/testimonios.css';
export const Testimonio = (props) => {

    return ( <
        >
        <
        div align = "center"
        id = { props.id } >
        <
        div class = "client_img-box" >
        <
        img src = { props.image }
        alt = ""
        width = "140 "
        height = "140 " / >
        <
        /div> <
        div class = "client_detail" >
        <
        h3 > { props.nameU } < /h3></div >
        <
        p class = "custom_heading-text" > { props.comentario } < /p> <
        /div> <
        />
    );
}