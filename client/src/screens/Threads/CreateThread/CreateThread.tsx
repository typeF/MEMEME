import React from 'react';
import CreateThreadButton from './CreateThreadButton';
import { Mutation } from 'react-apollo';
import CreateThreadMutation from './CreateThreadMutation';

const CreateThread = ({ forum } : { forum: String }) => {
  return (
    <Mutation 
      mutation={ CreateThreadMutation } 
      variables={{ title: "Thread 3", forum, content: "Post ZZZ" }}
      onCompleted={() => {
        console.log("Created thread");
      }}
    >
      {(createThread, {}) => ( 
        <CreateThreadButton createThread={ createThread }/>
      )}
    </Mutation>
  )
}

export default CreateThread;