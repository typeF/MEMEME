import React, { Fragment } from 'react';
import { Query } from "react-apollo";
import GetThreads from './ThreadsGetQuery';
import LoginStatusQuery from '../../graphQL/LoginStatusQuery';
import styled from 'styled-components';
import ThreadComponent from './ThreadComponent';
import NewThread from './NewThread';

const ThreadsContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 3rem;
  font-family: "Righteous", sans-serif;
`;

const ThreadsLine = styled.hr`
  display: block;
  border: 0;
  height: 1px;
  margin: 0;
  background: rgba(255, 255, 255, 0);
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
`;

const Threads = ({ match } : { match: any }) => (
    <Query query={ GetThreads } variables={{ forum: match.url.split("/")[2] }}>
      {({ loading, error, data }) => {
        const forum = match.url.split("/")[2];
        if (loading) return <p>Loading...</p>;
        if (error) return `${error}`;

        return (
          <Fragment>
            <ThreadsContainer>
              {forum.toUpperCase()}
              <ThreadsLine/>
              {data.threads.map((thread: any) => (
                <ThreadComponent
                  key={thread.id}
                  thread={thread}
                  link={`${ match.url }/${ thread.id }`}
                />
              ))}
            </ThreadsContainer>
            <Query query={ LoginStatusQuery }>
              {({ data }) => {
                return (
                  <Fragment>
                    {data.isLoggedIn && <NewThread forum={forum}/>}
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