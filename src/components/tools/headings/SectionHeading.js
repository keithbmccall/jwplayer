import React from "react";

const SectionHeading = props => {
  return <h4 className={props.className + ' Section-heading'}>{props.text}</h4>;
};

export default SectionHeading;
