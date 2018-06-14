import React from "react";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import SmallHeading from "../headings/SmallHeading";
import DescriptiveParagraph from "../text/DescriptiveParagraph";
//
const GraphAdjacentParagraph = props => {
  const { index, className, image, heading, text } = props;
  const orderLogic = index % 2 !== 0 ? "order-lg-1" : "";
  return (
    <Horizontal className={className}>
      <div className={orderLogic + " d-flex justify-content-center col-12 col-lg-4"}>
        <img
          src={image}
          alt={heading}
          className="img-fluid align-self-center Graph-img"
        />
      </div>
      <Vertical className="col-lg-8">
        <div className="mt-5 mb-5 ml-3 mr-3">
          <SmallHeading text={heading.toUpperCase()} />
          <DescriptiveParagraph text={text} className="mt-4" />
        </div>
      </Vertical>
    </Horizontal>
  );
};
export default GraphAdjacentParagraph;
