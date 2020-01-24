import React from "react";
import { Mutation } from "react-apollo";
import { Route, Redirect } from "react-router-dom";
import NewThread from "./NewThread";
import NewThreadMutation from "./NewThread/NewThreadMutation";

const New = ({ forum }: { forum: string }): JSX.Element => {
  return (
    <Mutation mutation={NewThreadMutation} onCompleted={() => {}}>
      {(newThread, { loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (data) {
          return (
            <Route>
              <Redirect
                to={`/forums/${data.createThread.forum.name}/${data.createThread.id}`}
              />
            </Route>
          );
        }

        return <NewThread mutation={newThread} />;
      }}
    </Mutation>
  );
};

export default New;
