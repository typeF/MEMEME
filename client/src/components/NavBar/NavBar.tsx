import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import LoginStatusQuery from "../../graphQL/LoginStatusQuery";
import NavBarLogo from "./NavBarLogo";
import NavBarMenuButton from "./NavBarMenuButton";
import Login from "../Login";
import LoginMenu from "./LoginMenu";
import LogoutMenu from "./LogoutMenu";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav id="navbar" role="navigation" aria-label="main navigation">
      <div id="navbar-left">
        <Link to="/" className="navbar-item">
          MEMEME
        </Link>
      </div>
      <div id="navbar-right">
        {/* <Login /> */}
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <NavBarMenuButton />
          </div>
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Query query={LoginStatusQuery}>
                {({ data }) => {
                  return (
                    <Fragment>
                      {data.isLoggedIn ? <LogoutMenu /> : <LoginMenu />}
                    </Fragment>
                  );
                }}
              </Query>
              <hr className="dropdown-divider" />
              <span className="dropdown-item">THEME</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
