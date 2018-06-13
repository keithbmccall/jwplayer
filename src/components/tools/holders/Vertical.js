import React from "react";

const Vertical = props => {
  return <div className={props.className + " col-12"}>{props.children}</div>;
};
export default Vertical;
