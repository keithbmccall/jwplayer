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
      <div className={orderLogic + " col-12 col-lg-4"}>
        <img
          src={image}
          alt={heading}
          className="img-fluid align-self-center Graph-img"
        />
      </div>
      <Vertical className="col-lg-8">
        <div className="mt-5 mb-5">
          <SmallHeading text={heading} />
          <DescriptiveParagraph text={text} />
        </div>
      </Vertical>
    </Horizontal>
  );
};
export default GraphAdjacentParagraph;
