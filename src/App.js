import React, { Component } from "react";
import Layout from "./hoc/layout/Layout";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import LandingContainer from "./containers/landing/LandingContainer";
import FeaturesContainer from "./containers/features/FeaturesContainer";
import ChartsContainer from "./containers/charts/ChartsContainer";

class App extends Component {
  render() {
    //layout wrapper for scalability, with regards to a potential addition of a react router or redux or something else added later
  
    return (
      <Layout>
        <NavbarContainer />
        <LandingContainer />
        <FeaturesContainer />
        <ChartsContainer />
      </Layout>
    );
  }
  
}


export default App;
