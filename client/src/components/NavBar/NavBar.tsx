import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarLogo from './NavBarLogo';
import Login from '../Login';
import './NavBar.scss';

const NavBar = () => {
  const [bugerActive, setBurgerActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <NavBarLogo/>
        </a>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Login/>
        <a role="button" className={ bugerActive ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setBurgerActive(!bugerActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={ bugerActive ? "navbar-menu is-active" : "navbar-menu" }>
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                More 1
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
