import React, { Component } from "react";
//for scalability, with regards to a potential addition of a react router or redux or something else added later
export default class Layout extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
