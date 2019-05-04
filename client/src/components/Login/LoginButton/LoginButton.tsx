import React from 'react';
import { Mutation, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const LoginMutation = gql`
  mutation Login($email: String!, $password: String!){ 
    login(email: $email, password: $password){ 
      user {
        id
        username
      }
    }
  }
`;

const LoginButton = ({ loginInfo } : { loginInfo: any}) => {

  const { username, email, password } = loginInfo;

  return (
    <ApolloConsumer>
      {client => (
        <Mutation 
          mutation={ LoginMutation } 
          onCompleted={data => { 
            if (data) {
              client.writeData({ data: { isLoggedIn: true }});
            }
          }}
        >
          {(login, { loading }) => { 
              if (loading) return (<div>Logging in...</div>);
              // if (error) return `${error}`;

              return (
                <a 
                  // className='button is-success is-outlined' 
                  className='dropdown-item' 
                  // onClick={() => login({ variables: { email: 'alice@mememe.com', password: '1' }})}>
                  onClick={() => login({ variables: { email, password }})}>
                  {username}
                </a>
              )
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  )
}

export default LoginButton;