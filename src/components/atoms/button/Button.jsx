import React from "react";
import "./button.css";

const Button = ({ text, classN }) => {
    return <button className={classN} >{text}</button>;
};

export default Button;
