import React, { useState } from 'react';
import styled from 'styled-components';
import NewThreadSubForums from './NewThreadSubForums';
import NewThreadPost from './NewThreadPost';
import NewThreadTitle from './NewThreadTitle';
import NewThreadSubmit from './NewThreadSubmit';

const NewThreadContainer = styled.div`
  grid-area: content;
  grid-gap: 35px;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
`;

const NewThread = ({ mutation }: { mutation: any }) => {

  const [forum, setForum] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postThread = () => {
    mutation({
      variables: {
        forum,
        title,
        content
      }
    });
  }

  return (
    <NewThreadContainer>
      <NewThreadSubForums
        setForum={setForum}
      />
      <NewThreadTitle setTitle={setTitle} />
      <NewThreadPost content={content} setContent={setContent} />
      <NewThreadSubmit submit={postThread} />
    </NewThreadContainer>
  )
}

export default NewThread;