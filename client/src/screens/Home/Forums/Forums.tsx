import React, { Fragment } from 'react';
import { Query } from "react-apollo";
import getForumsQuery from './ForumsQuery';
import { Link } from 'react-router-dom';
import './Forums.scss';

const Forums = () => (
  <Fragment>
    <Query query={ getForumsQuery }>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return `${error}`;

      return (
          <div className="forums">
            Forums
            {data.forums.map((forum: any) => (
              <Link 
                key={forum.id}
                to={`/forums/${forum.name}`}
              >
                {forum.name} 
                  &nbsp;- {forum.threads[0].posts[0].content}
                  &nbsp;- Last post by {forum.threads[0].posts[0].author.username} @ {forum.threads[0].posts[0].createdAt}
              </Link>
            ))}

          </div>
      )
      }}
    </Query>
  </Fragment>
);
export default Forums;