import React from "react";

const HeroImage = props => {
  const { heroImage, alt } = props;
  return <img src={heroImage} alt={alt} className="img-fluid" />;
};

export default HeroImage;
