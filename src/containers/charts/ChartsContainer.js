import React, { Component } from "react";
import data from "../../data/data.json";
//
export default class ChartsContainer extends Component {
  constructor() {
    super();
    this.state = {
      content: {},
      dataFetched: false
    };
  }
  fetchData = () => {
    console.log(data.results[0].data.body);
    const { body } = data.results[0].data;
    this.setState({
      dataFetched: true,
      content: {
        items: body.slice(1)
      }
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <div>charts</div>;
  }
}
