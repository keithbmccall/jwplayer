import React from "react";

const SubHeading = props => {
  return <p className={props.className + " Subhead"}>{props.text}</p>;
};

export default SubHeading;
