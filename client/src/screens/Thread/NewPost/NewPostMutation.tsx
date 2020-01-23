import gql from "graphql-tag";

const NewPostMutation = gql`
  mutation createPost($thread: String!, $content: String!) {
    createPost(thread: $thread, content: $content) {
      content
    }
  }
`;

export default NewPostMutation;
