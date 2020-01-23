import gql from "graphql-tag";

const getForumsQuery = gql`
  {
    forums {
      id
      name
      threads(first: 1) {
        id
        threadnumber
        title
        posts(first: 1) {
          createdAt
          author {
            username
          }
          content
        }
      }
    }
  }
`;

export default getForumsQuery;
