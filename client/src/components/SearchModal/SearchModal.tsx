import React from "react";
import Search from "../Search";
import styled from "styled-components";

const ModalContent = styled.div`
  max-width: 1000px;
  height: 80vh;
  width: 80vw;
`;

const SearchModal = ({
  active,
  closeModal,
  thread,
  threadTitle,
  submitFunction
}: {
  active: boolean;
  closeModal: any;
  thread: string;
  threadTitle: string;
  submitFunction: any;
}): JSX.Element => {
  return (
    <div className={active ? "modal is-active" : "modal"}>
      <div className="modal-background" onClick={() => closeModal()}>
        {" "}
      </div>
      <ModalContent className="modal-content">
        <Search
          closeModal={closeModal}
          postId={thread}
          threadTitle={threadTitle}
          submitFunction={submitFunction}
        />
      </ModalContent>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeModal()}
      ></button>
    </div>
  );
};

export default SearchModal;
