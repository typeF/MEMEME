import React, { useState } from 'react';
import styled from 'styled-components';
import NewThreadSubForums from './NewThreadSubForums';

const NewThreadContainer = styled.div`
  grid-area: content;
  grid-gap: 35px;
`;

const NewThread = ({ mutation } : { mutation: any}) => {

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
    </NewThreadContainer>
  )
}

export default NewThread;