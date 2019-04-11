import React, { Fragment } from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const testQuery = gql`
  {
    users {
      id
      username
    }
  }
`;

const testMutation = gql`
  mutation updateUser($id: ID!, $username: String!) {
    updateUser(id: $id, username: $username) {
      username
    }
  }
`;

const TestGraphQL = () => (
  <Fragment>
    <Query query={ testQuery }>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return `${error}`;

      return (
          <div>
            GraphQL Users:
            {data.users.map((user: any) => (
              <p key={user.id}>
                {user.username}
              </p>
            ))}
          </div>
      )
      }}
    </Query>
    <Mutation 
      mutation={ testMutation } 
      variables={{ id: "cjub26kjd02q40848q3z95toh", username: "Ari" }}
      onCompleted={() => {
        console.log("Updated user");
      }}
    >
      {(updateUser, { loading, error, data }) => { 
          if (loading) return (<div>Loading...</div>);
          if (error) return `${error}`;

          return (
          <button 
            className='button is-info is-outlined'
            onClick={e => {
              e.preventDefault();
              updateUser()
            }}
          >
          UPDATE USER
          </button>
          )
      }}
    </Mutation>
  </Fragment>
);

export default TestGraphQL;