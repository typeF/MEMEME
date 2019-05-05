import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Forum.scss';

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 7fr;
  min-height: 0;
  min-width: 0;
`;

const StyledContainer = styled.div`
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  height: 100%;
  margin-bottom: 3px;
  margin-top: 5px;
  padding: 10px;
  min-height: 0;
  min-width: 0;
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-rows: 7fr 1fr;
  min-height: 0;
  min-width: 0;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 0;
  min-width: 0;
`;

const StyledSpan = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Forum = ({ forum }: { forum: any }) => {
  const { name } = forum;
  const thread = forum.threads[0];
  const { author, content, createdAt } = thread.posts[0];

  return (
    <Fragment>
      <MainContainer>
        <Link
          className="forum-header forum-header-title"
          to={`/forums/${name}`}
        >
          {name}
        </Link>
        <StyledLink
          to={`/forums/${name}/${thread.id}`}
        >
          <StyledContainer>
            <StyledImg 
              className="forum-image" 
              src={content}/>
          </StyledContainer>
          <StyledSpan className="forum-footer forum-footer-description">[{author.username}]&nbsp;{thread.title}</StyledSpan>
        </StyledLink>
      </MainContainer>
    </Fragment>
  )
}

export default Forum;