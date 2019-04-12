import React, { Fragment } from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';
import './Thread.scss';

const getThread = gql`
  query Thread($threadId: ID!){
    thread(where: { id: $threadId }) {
      title
      author {
        username
      }
      posts {
        id
        postnumber
        author {
          username
        }
        content
        createdAt
      }
    }
  }
`;

const Thread = ({ match } : { match: any }) => (
  <Fragment>
    <Query query={ getThread } variables={{ threadId: match.url.split("/")[3] }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return `${error}`;

      return (
          <div className="thread">
            {data.thread.title} - Posts
            {data.thread.posts.map((post: any) => (
              <li key={post.id}>
                {post.content}
              </li>
            ))}
          </div>
      )
      }}
    </Query>
  </Fragment>
);
export default Thread;