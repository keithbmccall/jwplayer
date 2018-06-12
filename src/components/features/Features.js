import React from "react";
import SectionHeading from "../tools/headings/SectionHeading";
import Horizontal from "../tools/holders/Horizontal";
import Vertical from "../tools/holders/Vertical";
import FeaturesList from "./featureslist/FeaturesList";

const Features = props => {
  console.log(props.content);
  const renderFeatures = (item, key) => (
    <Vertical className="col-md-4" key={key}>
      <FeaturesList />
    </Vertical>
  );
  const { features, title } = props;
  const content = features.map(renderFeatures);
  return (
    <div
      className="container-fluid justify-content-center d-flex"
      id="Features-container"
    >
      <div className="flex-column text-center" style={{ background: "red" }}>
        <SectionHeading text={title.text} />
        <Horizontal>{content}</Horizontal>
      </div>
    </div>
  );
};

export default Features;
