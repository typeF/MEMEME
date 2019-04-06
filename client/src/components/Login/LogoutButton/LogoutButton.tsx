import React from 'react';
import { Mutation, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const LogoutMutation = gql`
  mutation Logout {
    logout {
      id
    }
  }
`;

const LogoutButton = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation 
          mutation={ LogoutMutation } 
          onCompleted={() => { 
            console.log('Logging out & removing cookies...');
            client.writeData({ data: { isLoggedIn: false }});
          }}
        >
          {(logout, { loading }) => { 
              if (loading) return (<div>Logging out...</div>);
              // if (error) return `${error}`;

              return (
                <StyledButton 
                  className='button is-danger is-outlined' 
                  onClick={ () => logout() }>
                  LOGOUT
                </StyledButton>
              )
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  )
}

export default LogoutButton;