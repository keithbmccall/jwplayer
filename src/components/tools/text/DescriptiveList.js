import React from "react";

const DescriptiveList = props => {
  return <li className={props.className + " D-l"}>{props.text}</li>;
};

export default DescriptiveList;
