import React, { Fragment } from "react";
import Button from "../tools/buttons/Button";

const Navbar = props => {
  const navBar = !props.collapseNav ? (
    <Fragment>
      <div className="d-flex align-items-center cursor nav-link">
        <a href="https://www.jwplayer.com/" >
          JWPLAYER
        </a>
        left
      </div>
      <nav className="nav col-sm align-items-center justify-content-end">
        rights
      </nav>
    </Fragment>
  ) : (
    <Fragment>
      <div className="d-flex align-items-center cursor nav-link">
        <a href="https://www.jwplayer.com/" >
          JWPLAYER
        </a>
        left
      </div>
      <div className="nav col-sm align-items-center justify-content-end">
        <div
          className="dropdown-toggle nav-link"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

          <div
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuButton"
          >
            dadasdjaks
          </div>
        </div>
      </div>
    </Fragment>
  );
  return (
    <div className="d-flex fixed-top" id="Navbar-container">
      {navBar}
    </div>
  );
};
export default Navbar;
