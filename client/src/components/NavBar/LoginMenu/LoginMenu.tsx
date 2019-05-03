import React, { Fragment } from 'react';

const LoginMenu = () => {
  return (
    <Fragment>
      <span className="dropdown-item">LOGIN</span>
      <hr className="dropdown-divider" />
      <span className="dropdown-item">100yr Old Grandma</span>
      <span className="dropdown-item">Alice</span>
      <span className="dropdown-item">Bob</span>
      <span className="dropdown-item">Chicken</span>
      <span className="dropdown-item">Dinosaur</span>
    </Fragment>
  );
}

export default LoginMenu;