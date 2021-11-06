import React from "react";
import "../styles/title.css"

const Label = ({text}) => {
    return (
        <div className="container">
            <label className="custom_heading">{text}</label>
        </div>
    )
};

export default Label;