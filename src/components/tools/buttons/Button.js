import React from "react";

const Button = props => (
  <button className={props.className + " btn rounded"}>
    <a href={props.url}>{props.text.toUpperCase()}</a>
  </button>
);

export default Button;
