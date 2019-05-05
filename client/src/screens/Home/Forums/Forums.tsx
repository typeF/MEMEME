import React, { Fragment } from 'react';
import { Query } from "react-apollo";
import getForumsQuery from './ForumsGetQuery';
import { Link } from 'react-router-dom';
import Forum from './Forum';
import './Forums.scss';

const Forums = () => (
  <Fragment>
    <Query query={getForumsQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return `${error}`;

        return (
          <div className="forums">
            Forums
            {data.forums.map((forum: any) => (
              <Forum key={forum.id} forum={forum} />
            ))}
          </div>
        )
      }}
    </Query>
  </Fragment>
);
export default Forums;