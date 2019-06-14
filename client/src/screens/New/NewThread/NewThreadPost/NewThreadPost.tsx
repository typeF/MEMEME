import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import SearchModal from '../../../../components/SearchModal';

const NewContentDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 300px;
  length: 300px;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
`;

const NewThreadPost = ({ content, setContent }: { content: string, setContent: any }) => {
  const [activeModal, setActiveModal] = useState(false);

  const applyContent = (variables: any) => {
    setActiveModal(false);
    setContent(variables.variables.content);
  }

  return (
    <Fragment>
      <SearchModal
        closeModal={() => setActiveModal(false)}
        active={activeModal}
        thread={"test"}
        submitFunction={applyContent}
      />
      <NewContentDiv onClick={() => setActiveModal(true)} />
    </Fragment>
  )
}

export default NewThreadPost;
