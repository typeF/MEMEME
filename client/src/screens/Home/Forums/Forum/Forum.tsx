import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MemeCard from "../../../../components/MemeCard";

const ForumContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 7fr;
  min-height: 0;
  min-width: 0;
`;

const ForumTitle = styled(Link)`
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 2.3rem;
`;

const ForumThreadLink = styled(Link)`
  min-height: 0;
  min-width: 0;
`;

const Forum = ({ forum }: { forum: any }): JSX.Element => {
  const { name } = forum;
  const thread = forum.threads[0];
  const { author, content, createdAt } = thread.posts[0];

  const link = `/forums/${name}/${thread.id}`;
  const img = content;
  const footer = `[${author.username}] ${thread.title}`;

  return (
    <Fragment>
      <ForumContainer>
        <ForumTitle to={`/forums/${name}`}>{name}</ForumTitle>
        <ForumThreadLink to={link}>
          <MemeCard counter="" img={img} footer={footer} />
        </ForumThreadLink>
      </ForumContainer>
    </Fragment>
  );
};

export default Forum;
