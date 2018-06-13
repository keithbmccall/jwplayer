import React from "react";
import Button from "../../tools/buttons/Button";
import Vertical from "../../tools/holders/Vertical";
import SmallHeading from "../../tools/headings/SmallHeading";
import DescriptiveParagraph from "../../tools/text/DescriptiveParagraph";
import DescriptiveList from "../../tools/text/DescriptiveList";
//
const FeaturesList = props => {
  const renderList = (item, key) => (
    <DescriptiveList key={key} text={item.text} />
  );
  const {
    feature_description,
    feature_title,
    list,
    list_header,
    button
  } = props.features;
  const descriptiveList = list.map(renderList);
  return (
    <Vertical className="col-sm-4 mt-5">
      <SmallHeading text={feature_title[0].text.toUpperCase()} />
      <div className="Spacer-20">
        <DescriptiveParagraph
          text={feature_description[0].text}
          className="mt-3 mb-3 Light-text-grey"
        />
      </div>
      <DescriptiveParagraph
        text={list_header[0].text.toUpperCase()}
        className="mt-3 mb-3 Light-text-grey"
      />
      {descriptiveList}
      <Button
        text={button.text}
        url={button.url}
        className="mt-4 mb-4 Red-bg text-light"
      />
    </Vertical>
  );
};

export default FeaturesList;
