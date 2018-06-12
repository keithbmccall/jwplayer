import React, { Fragment } from "react";
import TitleHeading from "../../tools/headings/TitleHeading";
import SubHeading from "../../tools/headings/SubHeading";
import Button from "../../tools/buttons/Button";
import HeroImage from "../../tools/images/HeroImage";

const HeaderGroup = props => {
  const { button, subhead, headerGroup } = props;
  const renderTitleHeading = (items, key) => (
    <div key={key} className="d-flex flex-row justify-content-center">
      <img
        src={items.icon.url}
        alt="JWPUBLISH"
        className="mh-100 img-fluid Landing-header-image"
      />
      <TitleHeading text={items.title[0].text} />
    </div>
  );
  const renderSubHeading = (items, key) => (
    <SubHeading text={items.text} key={key} />
  );
  const imgAndTitleHeading = headerGroup.map(renderTitleHeading);
  const subheading = subhead.map(renderSubHeading);

  return (
    <div className="align-self-center align-content-center mt-5 text-center">
      {imgAndTitleHeading}
      {subheading}
      <div className="mt-4 mb-4">
        <Button text={button.text} url={button.url} />
      </div>
    </div>
  );
};

export default HeaderGroup;
