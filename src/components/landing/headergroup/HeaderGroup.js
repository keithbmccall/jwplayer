import React from "react";
import TitleHeading from "../../tools/headings/TitleHeading";
import Button from "../../tools/buttons/Button";
import SubHeading from "../../tools/headings/SubHeading";

const HeaderGroup = props => {
  const { button, subhead, headerGroup } = props;
  const renderTitleHeading = (items, key) => (
    <div key={key} className="d-flex flex-row justify-content-center mb-2">
      <img
        src={items.icon.url}
        alt="JWPUBLISH"
        className="img-fluid Header-icon align-self-center mr-2 ml-2"
      />
      <TitleHeading text={items.title[0].text.toUpperCase()} />
    </div>
  );
  const renderSubHeading = (items, key) => (
    <SubHeading text={items.text} key={key} className="Landing-subhead" />
  );
  const iconAndTitleHeading = headerGroup.map(renderTitleHeading);
  const subheading = subhead.map(renderSubHeading);

  return (
    <div className="align-self-center align-content-center mt-5 text-center">
      {iconAndTitleHeading}
      {subheading}

      <Button text={button.text} url={button.url} className="mt-4 mb-4 text-dark" />
    </div>
  );
};

export default HeaderGroup;
