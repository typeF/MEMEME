import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const testQuery = gql`
  {
    users {
      id
      name
    }
  }
`;

const TestGraphQL = () => (
  <Query query={ testQuery }>
   {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>
    if (error) return `${error}`;

    return (
        <p>
          GraphQL Users:
          {data.users.map((user: any) => (
            <p>
              {user.name}
            </p>
          ))}
        </p>
    )
    }}
  </Query>
);

export default TestGraphQL;