import React, { Fragment } from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';
import './Threads.scss';

const getThreads = gql`
  query Threads($forum: String! ){
    threads(where: { subForum: { name: $forum }}) {
      id
      title
      author {
        username
      }
      posts {
        author {
          username
        }
        id
        content
        createdAt
      }
    }
  }
`;

const Threads = ({ match } : { match: any }) => (
  <Fragment>
    <Query query={ getThreads } variables={{ forum: match.url.split("/")[2] }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return `${error}`;

      return (
          <div className="threads">
            Threads
            {data.threads.map((thread: any) => (
              <Fragment key={thread.id}>
                <Link 
                  key={thread.id}
                  to={`${ match.url }/${ thread.id }`}
                >
                  {thread.title} 
                </Link>
                {thread.posts.map((post: any) => (
                  <li key={post.id}>{post.author.username}&nbsp;-&nbsp;{post.content}&nbsp;@{post.createdAt}</li>
                ))}
              </Fragment>
            ))}

          </div>
      )
      }}
    </Query>
  </Fragment>
);
export default Threads;