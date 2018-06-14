import React, { Fragment } from "react";
import NavbarItems from "./NavbarItems";
import Button from "../tools/buttons/Button";
import Horizontal from "../tools/holders/Horizontal";
//
const Navbar = props => {
  const { navLeft, navRight, logo } = props;
  const navBar = !props.collapseNav ? (
    <Fragment>
      <div className="d-flex align-items-center cursor nav-link">
        <a href="https://www.jwplayer.com/">
          JWPLAYER
        </a>
        <Horizontal className="ml-3 mt-2">
          <NavbarItems content={navLeft} />
        </Horizontal>
      </div>
      <nav className="nav col-sm align-items-center justify-content-end">
        <Horizontal className="mr-3 mt-3">
          <NavbarItems content={navRight} />
        </Horizontal>

        <Button
          text="GET STARTED"
          url="https://www.jwplayer.com/"
          className="Red-bg"
        />
      </nav>
    </Fragment>
  ) : (
    <Fragment>
      <div className="d-flex align-items-center cursor nav-link">
        <a href="https://www.jwplayer.com/">
        JWPLAYER
        </a>
      </div>
      <nav className="nav navbar-dark col-sm align-items-center justify-content-end">
        <Button
          text="GET STARTED"
          url="https://www.jwplayer.com/"
          className="Red-bg"
        />
        <div
          className="dropdown nav-link"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuButton"
          >
            <NavbarItems content={navLeft} />
            <NavbarItems content={navRight} />
          </div>
        </div>
      </nav>
    </Fragment>
  );
  return (
    <div className="d-flex fixed-top" id="Navbar-container">
      {navBar}
    </div>
  );
};
export default Navbar;
