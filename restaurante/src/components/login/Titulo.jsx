import React from "react";
import  "../styles/title.css";

const Title = ({text}) => {
    return (
        <div className="title-container">
           <label className="custom_heading">{text}</label> 
        </div>
    )
}

export default Title;