import React from "react";

const Vertical = props => {
  return <div className={props.className + " col"}>{props.children}</div>;
};
export default Vertical;
