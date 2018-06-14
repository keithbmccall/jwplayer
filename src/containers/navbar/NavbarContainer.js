import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
//
export default class NavbarContainer extends Component {
  constructor() {
    super();
    this.state = {
      collapseNav: false,
      content: {
        navLeft: {
          type: "big",
          text: ["Solutions", "Customers", "Pricing"]
        },
        navRight: {
          type: "small",
          text: ["Company", "Careers", "Developers", "Support", "Sign-in"]
        }
      }
    };
  }
  windowResize = () => {
    this.setState({
      collapseNav: window.innerWidth < 780
    });
  };
  componentDidMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  }
  render() {
    return (
      <Navbar
        collapseNav={this.state.collapseNav}
        navLeft={this.state.content.navLeft}
        navRight={this.state.content.navRight}
      />
    );
  }
}
