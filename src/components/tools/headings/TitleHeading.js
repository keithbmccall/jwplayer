import React from "react";

const TitleHeading = props => {
  return <h1 className={props.className + " Title-heading"}>{props.text}</h1>;
};

export default TitleHeading;
