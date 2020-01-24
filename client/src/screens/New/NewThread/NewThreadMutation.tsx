import gql from "graphql-tag";

const NewThreadMutation = gql`
  mutation createThread($forum: String!, $title: String!, $content: String!) {
    createThread(forum: $forum, title: $title, content: $content) {
      id
      title
      forum {
        name
      }
    }
  }
`;

export default NewThreadMutation;
