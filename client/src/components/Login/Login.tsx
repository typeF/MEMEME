import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const GetLogin = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const Login = () => { 
  return (
    <Query query={ GetLogin }>
      {({ data }) => (data.isLoggedIn ?
        <LogoutButton/>
        :
        <LoginButton/>
      )} 
    </Query>
  )
 };

export default Login;