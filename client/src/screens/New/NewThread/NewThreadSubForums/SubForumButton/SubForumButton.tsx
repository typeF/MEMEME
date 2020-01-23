import React, { useState } from "react";
import styled from "styled-components";
import "./SubForumButton.scss";

const StyledButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  font-family: "Righteous", sans-serif;
  font-size: 1.3rem;
  height: 2.5rem;
  padding: 0.3rem 0.5rem;
  &:focus:not(:active) {
    border-color: white;
    box-shadow: none;
  }
`;

const SubForumButton = ({
  isLoading,
  isSelectable,
  onClick,
  text
}: {
  isLoading: boolean;
  isSelectable: boolean;
  onClick: any;
  text: string;
}): JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  const className =
    "button is-inverted " +
    "subForum-btn " +
    "forum-" +
    text +
    (isLoading ? " is-loading" : "") +
    (isSelectable && isSelected ? " is-selected" : "");

  return (
    <StyledButton
      className={className}
      onClick={(): void => {
        setIsSelected(!isSelected);
        onClick();
      }}
    >
      {text}
    </StyledButton>
  );
};

export default SubForumButton;
