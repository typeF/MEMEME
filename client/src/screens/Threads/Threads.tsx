import React, { Fragment } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';
import LoginStatusQuery from '../../graphQL/LoginStatusQuery';
import CreateThread from './CreateThread';
import './Threads.scss';

const getThreads = gql`
  query Threads($forum: String!){
    threads(where: { forum: { name: $forum }}) {
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
    <Query query={ getThreads } variables={{ forum: match.url.split("/")[2] }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return `${error}`;

      return (
          <Fragment>
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
            <Query query={ LoginStatusQuery }>
              {({ data }) => (data.isLoggedIn && <CreateThread forum={ match.url.split("/")[2]}/>)} 
            </Query>
          </Fragment>
      )
      }}
    </Query>
);
export default Threads;