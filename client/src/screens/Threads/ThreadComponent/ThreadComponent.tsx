import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MemeCardSquare from "../../../components/MemeCardSquare";

const Thread = styled.div`
  margin-bottom: 50px;
`;

const ThreadLink = styled(Link)`
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 1.5rem;
`;

const ThreadContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
`;

const ThreadComponent = ({
  thread,
  link
}: {
  thread: any;
  link: any;
}): JSX.Element => {
  return (
    <Thread>
      <ThreadLink to={link}>{thread.title}</ThreadLink>
      <ThreadContainer>
        {thread.posts.map((post: any) => (
          <MemeCardSquare
            key={post.id}
            counter=""
            img={post.content}
            clickHandler=""
          />
        ))}
      </ThreadContainer>
    </Thread>
  );
};

export default ThreadComponent;
