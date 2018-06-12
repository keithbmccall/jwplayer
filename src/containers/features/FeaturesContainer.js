import React, { Component, Fragment } from "react";
import data from "../../data/data.json";
import Features from "../../components/features/Features";

export default class FeaturesContainer extends Component {
  constructor() {
    super();
    this.state = {
      content: {},
      dataFetched: false
    };
  }
  fetchData = () => {
    const { body } = data.results[0].data;
    this.setState({
      dataFetched: true,
      content: {
        title: body[0].primary.features_header,
        features: body[0].items
      }
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  renderFeatures = (item, key) => (
    <Features key={key} features={this.state.content.features} title={item} />
  );

  render() {
    const features =
      this.state.dataFetched &&
      this.state.content.title.map(this.renderFeatures);
    return <Fragment>{features}</Fragment>;
  }
}
