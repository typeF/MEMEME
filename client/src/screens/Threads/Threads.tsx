import React, { Fragment } from 'react';
import GetThreads from './ThreadsGetQuery';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import './Threads.scss';
import LoginStatusQuery from '../../graphQL/LoginStatusQuery';
import NewThread from './NewThread';

const Threads = ({ match } : { match: any }) => (
    <Query query={ GetThreads } variables={{ forum: match.url.split("/")[2] }}>
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
              {({ data }) => {
                return (
                  <Fragment>
                    {data.isLoggedIn && <NewThread forum={ match.url.split("/")[2]}/>}
                  </Fragment>
                )
              }}
            </Query>
          </Fragment>
        )
      }}
    </Query>
);
export default Threads;