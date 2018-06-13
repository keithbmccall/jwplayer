import React from "react";

const SubHeading = props => {
  return (
    <p className={props.className + " Sub-heading"}>{props.text}</p>
  );
};

export default SubHeading;
