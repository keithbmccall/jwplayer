import React, { Component, Fragment } from "react";
import data from "../../data/data.json";
//
import HeroImage from "../../components/tools/images/HeroImage";
import HeaderGroup from "../../components/landing/headergroup/HeaderGroup";
import Landing from "../../components/landing/Landing";
//
export default class LandingContainer extends Component {
  constructor() {
    super();
    this.state = {
      content: {},
      dataFetched: false
    };
  }
  fetchData = () => {
    const {
      "hero-image": heroImage,
      subhead,
      button,
      "header-group": headerGroup
    } = data.results[0].data;
    this.setState({
      dataFetched: true,
      content: {
        headerGroup,
        button,
        subhead,
        heroImage
      }
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return this.state.dataFetched && <Landing content={this.state.content} />;
  }
}
