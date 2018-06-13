import React from "react";

const DescriptiveParagraph = props => {
  return <p className={props.className + " D-p font-weight-light"}>{props.text}</p>;
};

export default DescriptiveParagraph;
