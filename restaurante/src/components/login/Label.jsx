import React from "react";
import "../styles/label.css";

const Label = ({text}) => {
    return (
        <div className="custom_heading">
            <label>{text}</label>
        </div>
    )
};

export default Label;