import React from "react";
import SectionHeading from "../tools/headings/SectionHeading";
import Horizontal from "../tools/holders/Horizontal";
import FeaturesList from "./featureslist/FeaturesList";

const Features = props => {
  const renderFeatures = (item, key) => (
    <FeaturesList features={item} key={key} />
  );
  const { features, title } = props;
  const content = features.map(renderFeatures);
  return (
    <div
      className="container-fluid justify-content-center d-flex"
      id="Features-container"
    >
      <div className="flex-column text-center mt-5 mb-5">
        <SectionHeading text={title.text} />
        <Horizontal className="mt-5">{content}</Horizontal>
      </div>
    </div>
  );
};

export default Features;
