// import React from 'react';
// import { Query } from "react-apollo";
import gql from "graphql-tag";

const LoginStatusQuery = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

// const isLoggedIn = () => { 
//   return (
//     <Query query={ IsLoggedIn }>
//       {({ data }) => 
//       (data.isLoggedIn ?
//         AuthenticatedAction
//         :
//         UnAuthenticatedAction && <UnAuthenticatedAction/>
//       )} 
//     </Query>
//   )
//  };

export default LoginStatusQuery;