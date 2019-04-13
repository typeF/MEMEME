import React from 'react';
import { Mutation } from 'react-apollo';
import NewPostMutation from './NewPostMutation';
import NewPostButton from './NewPostButton';

const NewPost = ({ thread } : { thread: String }) => {
  return (
    <Mutation 
      mutation={ NewPostMutation } 
      variables={{ thread: "cjuenbtyi03qm0848dodogvbg", content: "PewPewPew!"}}
      onCompleted={() => {
        console.log("Created post");
      }}
    >
      {(newPost, {}) => ( 
        <NewPostButton newPost={ newPost }/>
      )}
    </Mutation>
  )
}

export default NewPost;