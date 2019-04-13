import React from 'react';
import { Query } from 'react-apollo';
import LoginStatusQuery from '../../graphQL/LoginStatusQuery';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Login = () => { 
  return (
  <Query query={ LoginStatusQuery }>
    {({ data }) => 
    (data.isLoggedIn ?
      <LogoutButton/>
      :
      <LoginButton/>
    )} 
  </Query>
  )
 };

export default Login;