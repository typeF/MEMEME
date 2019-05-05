import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Forum.scss';

const MainContainer = styled.div`
`;

const StyledContainer = styled.div`
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  margin-bottom: 3px;
  margin-top: 5px;
  padding: 10px;
  padding-bottom: 2px;
`;

const StyledImg = styled.img`
  border-radius: 10px;
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
  const testSrc = "https://images.unsplash.com/photo-1556647034-7aa9a4ea7437?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"

  return (
    <Fragment>
      <MainContainer>
        <Link
          className="forum-header forum-header-title"
          to={`/forums/${name}`}
        >
          {name}
        </Link>
        <Link
          to={`/forums/${name}/${thread.id}`}
        >
          <StyledContainer>
            <StyledImg 
              className="forum-image" 
              src={testSrc}/>
          </StyledContainer>
          <StyledSpan className="forum-footer forum-footer-description">[{author.username}]&nbsp;{thread.title}</StyledSpan>
        </Link>
      </MainContainer>
    </Fragment>
  )
}

export default Forum;