import gql from "graphql-tag";

const GetThread = gql`
  query Thread($threadId: ID!) {
    thread(where: { id: $threadId }) {
      title
      author {
        username
      }
      posts {
        id
        postnumber
        author {
          username
        }
        content
        createdAt
      }
    }
  }
`;

export default GetThread;
