import React from "react";
import  "../styles/title.css";

const Title = ({text}) => {
    return (
        <div className="title-container" style={{  paddingBottom: "20px", paddingTop: "20px", paddingRight: "57px", paddingLeft:"57px" }}>
           <label className="custom_heading">{text}</label> 
        </div>
    )
}

export default Title;