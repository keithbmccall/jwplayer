import React from "react";
import HeaderGroup from "./headergroup/HeaderGroup";
import HeroImage from "../tools/images/HeroImage";

const Landing = props => {
  const { headerGroup, button, subhead, heroImage } = props.content;
  return (
    <div className="container-fluid flex-column d-flex" id="Landing-container">
      <div className="row">
        <div className="col-md-12">
          <HeaderGroup
            headerGroup={headerGroup}
            button={button}
            subhead={subhead}
          />
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-grow-1 align-items-end justify-content-center col-md-12 align-self-center">
          <HeroImage heroImage={heroImage} />
        </div>
      </div>
    </div>
  );
};
export default Landing;
