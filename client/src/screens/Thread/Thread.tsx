import React, { Fragment } from "react";
import { Query } from "react-apollo";
import GetThread from "./ThreadGetQuery";
import LoginStatusQuery from "../../graphQL/LoginStatusQuery";
import styled from "styled-components";
import MemeCard from "../../components/MemeCard";
import FadingLine from "../../components/FadingLine";
import NewPost from "./NewPost";
import "./Thread.scss";

const ThreadContainer = styled.div`
  grid-area: content;
`;

const ThreadTitle = styled.span`
  color: white;
  font-size: 3rem;
  font-family: "Righteous", sans-serif;
`;

const PostsContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(350px, auto);
  grid-gap: 20px;
`;

const Thread = ({ match }: { match: any }) => (
  <Fragment>
    <Query query={GetThread} variables={{ threadId: match.url.split("/")[3] }}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>error...</p>;
        // if (error) return `${error}`;

        const threadTitle = data.thread.title.toUpperCase();

        return (
          <Fragment>
            <ThreadContainer>
              <ThreadTitle>
                {`${match.url.split("/")[2].toUpperCase()} > ${threadTitle}`}
              </ThreadTitle>

              <FadingLine />

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

              <Query query={LoginStatusQuery}>
                {({ data }): JSX.Element => {
                  return (
                    <Fragment>
                      {data.isLoggedIn && (
                        <NewPost
                          refetch={refetch}
                          thread={match.url.split("/")[3]}
                          threadTitle={threadTitle}
                        />
                      )}
                    </Fragment>
                  );
                }}
              </Query>
            </ThreadContainer>
          </Fragment>
        );
      }}
    </Query>
  </Fragment>
);

export default Thread;
