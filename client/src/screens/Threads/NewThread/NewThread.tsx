import React from 'react';
import NewThreadButton from './NewThreadButton';
import { Mutation } from 'react-apollo';
import NewThreadMutation from './NewThreadMutation';

const NewThread = ({ forum } : { forum: String }) => {
  return (
    <Mutation 
      mutation={ NewThreadMutation } 
      variables={{ title: "Thread 3", forum, content: "Post ZZZ" }}
      onCompleted={() => {
        console.log("Created thread");
      }}
    >
      {(newThread, {}) => ( 
        <NewThreadButton newThread={ newThread }/>
      )}
    </Mutation>
  )
}

export default NewThread;