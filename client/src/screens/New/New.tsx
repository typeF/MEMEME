import React from 'react';
import { Mutation } from 'react-apollo';
import NewThread from './NewThread';
import NewThreadButton from './NewThread/NewThreadButton';
import NewThreadMutation from './NewThread/NewThreadMutation';

const New = ({ forum } : { forum: String }) => {
  return (
    <Mutation 
      mutation={ NewThreadMutation } 
      variables={{ title: "Thread 3", forum, content: "Post ZZZ" }}
      onCompleted={() => {
      }}
    >
      {(newThread, { loading, error, data }) => { 
        if (loading) return <p>Loading...</p>
        if (data) return <p>Created thread!</p>

        return (
          // <NewThreadButton newThread={ newThread }/>
          <NewThread mutation={ newThread }/>
        ) 
      }}
    </Mutation>
  )
}

export default New;