import React from "react";

const SmallHeading = props => {
  return (
    <h3 className={props.className + " Small-heading"}>
      {props.text}
    </h3>
  );
};

export default SmallHeading;
