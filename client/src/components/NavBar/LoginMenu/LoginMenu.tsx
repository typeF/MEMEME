import React, { Fragment } from 'react';
import LoginButton from '../../../components/Login/LoginButton';

const LoginMenu = () => {
  const userLogins = [['Alice', 'alice@mememe.com'],
  ['Bob', 'bob@mememe.com'],
  ['100yr Old Grandma', '100yrgrandma@mememe.com'],
  ['Chicken', 'chicken@mememe.com'],
  ['Dinosaur', 'dinosaur@mememe.com']];

  return (
    <Fragment>
      <span className="dropdown-item">Select a user</span>
      <hr className="dropdown-divider" />
      {userLogins.map(userLogin => (
        <LoginButton loginInfo={{ username: userLogin[0], email: userLogin[1], password: '1' }} />
      ))}
    </Fragment>
  );
}

export default LoginMenu;