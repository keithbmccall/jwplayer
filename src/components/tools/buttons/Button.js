import React from "react";

const Button = props => (
  <button className="btn bg-white rounded">
    <a src={props.url}>{props.text.toUpperCase()}</a>
  </button>
);

export default Button;
