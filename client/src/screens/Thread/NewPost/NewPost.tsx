import React from "react";
import { Mutation } from "react-apollo";
import NewPostMutation from "./NewPostMutation";
import NewPostButton from "./NewPostButton";

const NewPost = ({
  thread,
  threadTitle
}: {
  thread: string;
  threadTitle: string;
}): JSX.Element => {
  return (
    <Mutation mutation={NewPostMutation} onCompleted={() => {}}>
      {(newPost, { loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (data) return <p>Posted!</p>;

        return (
          <NewPostButton
            thread={thread}
            threadTitle={threadTitle}
            newPost={newPost}
          />
        );
      }}
    </Mutation>
  );
};

export default NewPost;
