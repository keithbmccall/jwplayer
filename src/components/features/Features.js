import React from "react";
import SectionHeading from "../tools/headings/SectionHeading";
import Horizontal from "../tools/holders/Horizontal";
import Vertical from "../tools/holders/Vertical";

const Features = props => {
  console.log(props.content);
  return (
    <div
      className="container-fluid justify-content-center d-flex"
      id="Features-container"
    >
      <div className="flex-column text-center"  style={{background:'red'}}>
        <SectionHeading text="HEADING" />
        <Horizontal>
          <Vertical className="col-md-4">vertss</Vertical>
          <Vertical className="col-md-4">vertss</Vertical>
          <Vertical className="col-md-4">vertss</Vertical>
        </Horizontal>
      </div>
    </div>
  );
};

export default Features;
