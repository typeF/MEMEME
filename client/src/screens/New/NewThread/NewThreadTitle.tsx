import React from 'react';
import styled from 'styled-components';

const ThreadTitle = styled.input`
  font-family: "Righteous", sans-serif;
  color: white;
  font-size: 1.8em;
  background-color: rgba(0, 0, 0, 0.0);
  box-shadow: unset;
  border-color: rgba(0, 0, 0, 0.0);
  &::placeholder {
    color: white;
  } 
  border-bottom: 1px solid white;
  width: 100%;
`;

const NewThreadTitle = ({ setTitle }: { setTitle: any }) => {
  return (
    <ThreadTitle
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
    />
  )
}

export default NewThreadTitle;
