import React, { Fragment, useState } from "react";
import styled from "styled-components";
import SearchModal from "../../../../components/SearchModal";
import MemeCardSquare from "../../../../components/MemeCardSquare";

const NewContentDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const NewThreadPost = ({
  content,
  setContent
}: {
  content: string;
  setContent: any;
}): JSX.Element => {
  const [activeModal, setActiveModal] = useState(false);

  const applyContent = (data: any) => {
    setActiveModal(false);
    setContent(data.variables.content);
  };

  return (
    <Fragment>
      <SearchModal
        closeModal={() => setActiveModal(false)}
        active={activeModal}
        thread={""}
        threadTitle={""}
        submitFunction={applyContent}
      />
      <NewContentDiv onClick={() => setActiveModal(true)}>
        <MemeCardSquare img={content} counter={""} clickHandler={() => {}} />
      </NewContentDiv>
    </Fragment>
  );
};

export default NewThreadPost;
