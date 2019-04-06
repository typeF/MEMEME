import React, { Fragment } from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const testQuery = gql`
  {
    users {
      id
      name
    }
  }
`;

const testMutation = gql`
  mutation updateUser($id: ID!, $name: String!) {
    updateUser(id: $id, name: $name) {
      name
    }
  }
`;

const checkCookies = () => {
  const cookies = document.cookie;
  console.log("Cookies: " + cookies);
};

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
                {user.name}
              </p>
            ))}
          </div>
      )
      }}
    </Query>
    <Mutation 
      mutation={ testMutation } 
      variables={{ id: "cjtjxmolf006m0741g3ezczwe", name: "Ari" }}
      onCompleted={() => {
        console.log("Updated user");
        checkCookies();
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