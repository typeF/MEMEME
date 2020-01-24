import React from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

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
          mutation={LogoutMutation}
          onCompleted={() => {
            console.log("Logging out & removing cookies...");
            client.writeData({ data: { isLoggedIn: false } });
          }}
        >
          {(logout, { loading }) => {
            if (loading) return <div>Logging out...</div>;

            return (
              // eslint-disable-next-line
              <a className="dropdown-item" onClick={() => logout()}>
                Logout
              </a>
            );
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

export default LogoutButton;
