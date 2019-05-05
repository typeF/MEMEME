import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MemeCard from '../../../components/MemeCard';

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
  height: 250px;
`;

const ThreadComponent = ({ thread, link } : { thread: any, link: any}) => {
  return (
    <Thread>
      <ThreadLink 
        to={link}
      >
        {thread.title} 
      </ThreadLink>
      <ThreadContainer>
        {thread.posts.map((post: any) => (
          <MemeCard 
            key={post.id}
            counter=""
            img={post.content} 
            footer={`[${post.author.username}] @${post.createdAt}`}
          />
        ))}
      </ThreadContainer>
    </Thread>
  )
};

export default ThreadComponent;

