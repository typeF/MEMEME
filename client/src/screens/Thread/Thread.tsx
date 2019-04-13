import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import GetThread from './ThreadGetQuery';
import { Link } from 'react-router-dom';
import './Thread.scss';

const Thread = ({ match } : { match: any }) => (
  <Fragment>
    <Query query={ GetThread } variables={{ threadId: match.url.split("/")[3] }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return `${error}`;

        return (
          <div className="thread">
            {data.thread.title} - Posts
            {data.thread.posts.map((post: any) => (
              <li key={post.id}>
                {post.content}&nbsp;-&nbsp;By {post.author.username}&nbsp;@{post.createdAt}
              </li>
            ))}
          </div>
        )
      }}
    </Query>
  </Fragment>
);
export default Thread;