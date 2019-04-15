import React from 'react';
import { Mutation } from 'react-apollo';
import NewPostButton from './NewPostButton';
import NewPostMutation from './NewPostMutation';

const NewPost = ({ thread } : { thread: String }) => {
  return (
    <Mutation 
      mutation={ NewPostMutation } 
      variables={{ thread, content: "PewPewPew!"}}
      onCompleted={() => {
        // console.log("Created post");
      }}
    >
      {(newPost, { loading, error, data }) => { 
        if (loading) return <p>Loading...</p>;
        if (data) return <p>Posted!</p>;

        return (
          <NewPostButton newPost={ newPost }/>
        )
  }}
    </Mutation>
  )
}

export default NewPost;