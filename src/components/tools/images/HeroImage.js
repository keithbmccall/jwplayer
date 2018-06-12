import React from "react";

const HeroImage = props => {
  const { url } = props.heroImage;
  return <img src={url} alt="JWPLAYER" className="img-fluid" />;
};

export default HeroImage;
