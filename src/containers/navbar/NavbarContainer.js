import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";

export default class NavbarContainer extends Component {
  constructor() {
    super();
    this.state = {
      collapseNav: false
    };
  }
  windowResize = () => {
    this.setState({
      collapseNav: window.innerWidth < 760
    });
  };
  componentDidMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  }
  render() {
    console.log(this.state.collapseNav);
    return <Navbar collapseNav={this.state.collapseNav} />;
  }
}
