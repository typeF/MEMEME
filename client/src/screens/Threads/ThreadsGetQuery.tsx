import gql from "graphql-tag";

const GetThreads = gql`
  query Threads($forum: String!){
    threads(where: { forum: { name: $forum }}) {
      id
      title
      author {
        username
      }
      posts {
        author {
          username
        }
        id
        content
        createdAt
      }
    }
  }
`;

export default GetThreads;