import React from "react";

const TitleHeading = props => {
  return <h1 className={props.className}>{props.text.toUpperCase()}</h1>;
};

export default TitleHeading;
