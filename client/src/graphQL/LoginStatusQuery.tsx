import gql from "graphql-tag";

const LoginStatusQuery = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

export default LoginStatusQuery;
