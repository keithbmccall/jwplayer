import React from "react";
import GraphAdjacentParagraph from "../tools/holders/GraphAdjacentParagraph";
//
const Charts = props => {
  const renderChartsList = (item, key) => {
    const { image, section_header, section_text } = item.primary;
    return (
      <div className="mt-5 mb-5" key={key}>
        <GraphAdjacentParagraph
          image={image.url}
          heading={section_header[0].text}
          text={section_text[0].text}
          className="mt-5 mb-5"
          index={key}
        />
      </div>
    );
  };
  const { items } = props.content;
  const chartsList = items.map(renderChartsList);
  return (
    <div className="container-fluid" id="Charts-container">
      <div className="mt-5 mb-5">{chartsList}</div>
    </div>
  );
};
export default Charts;
