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

const LoginButton = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation 
          mutation={ LoginMutation } 
          variables={{email: 'a@a.com', password: '1'}}
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
                <StyledButton 
                  className='button is-success is-outlined' 
                  onClick={() => login()}>
                  LOGIN
                </StyledButton>
              )
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  )
}

export default LoginButton;