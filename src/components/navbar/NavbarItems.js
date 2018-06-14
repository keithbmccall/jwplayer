import React, { Fragment } from "react";
import SmallHeading from "../tools/headings/SmallHeading";
import DescriptiveParagraph from "../tools/text/DescriptiveParagraph";

const NavbarItems = props => {
  const { text, type } = props.content;
  const renderNavbarItems = (item, key) =>
    type === "big" ? (
      <SmallHeading text={item} className="mr-2 ml-2" key={key} />
    ) : (
      <DescriptiveParagraph text={item} className="mr-2 ml-2" key={key} />
    );
  const navbarItems = text.map(renderNavbarItems);
  return <Fragment>{navbarItems}</Fragment>;
};
export default NavbarItems;
