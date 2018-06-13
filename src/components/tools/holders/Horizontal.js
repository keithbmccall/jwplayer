import React from "react";

const Horizontal = props => {
  return <div className={props.className + " row"}>{props.children}</div>;
};
export default Horizontal;
