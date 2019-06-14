import React from 'react';
import { Mutation } from 'react-apollo';
import NewThread from './NewThread';
import NewThreadMutation from './NewThread/NewThreadMutation';

const New = ({ forum } : { forum: String }) => {
  return (
    <Mutation 
      mutation={ NewThreadMutation } 
      onCompleted={() => {
      }}
    >
      {(newThread, { loading, error, data }) => { 
        if (loading) return <p>Loading...</p>
        if (data) return <p>Created thread!</p>

        return (
          <NewThread mutation={ newThread }/>
        ) 
      }}
    </Mutation>
  )
}

export default New;