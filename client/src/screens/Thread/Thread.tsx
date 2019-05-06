import React, { Fragment } from "react";
import { Query } from "react-apollo";
import GetThread from "./ThreadGetQuery";
import LoginStatusQuery from "../../graphQL/LoginStatusQuery";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MemeCard from '../../components/MemeCard';
import FadingLine from '../../components/FadingLine';
import NewPost from "./NewPost";
import "./Thread.scss";

const ThreadContainer = styled.div`
  grid-area: content;
  color: white;
  font-size: 3rem;
  font-family: "Righteous", sans-serif;
`;

const PostsContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: minmax(250px, 400px);
  grid-gap: 20px;
`;

const Thread = ({ match }: { match: any }) => (
  <Fragment>
    <Query query={GetThread} variables={{ threadId: match.url.split("/")[3] }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>error...</p>;
        // if (error) return `${error}`;

        return (
          <Fragment>
            <ThreadContainer>
              {`${match.url.split("/")[2].toUpperCase()} > ${data.thread.title.toUpperCase()}`}
              <FadingLine/>
              <PostsContainer>
                {data.thread.posts.map((post: any) => (
                  <MemeCard 
                    key={post.id}
                    counter={post.number}
                    img={post.content} 
                    footer={`[${post.author.username}] @${post.createdAt}`}
                  />
                ))}
              </PostsContainer>
            </ThreadContainer>
          </Fragment>
        );
      }}
    </Query>
    <Query query={LoginStatusQuery}>
      {({ data }) => {
        return (
          <Fragment>
            {data.isLoggedIn && <NewPost thread={match.url.split("/")[3]} />}
          </Fragment>
        );
      }}
    </Query>
  </Fragment>
);

export default Thread;
