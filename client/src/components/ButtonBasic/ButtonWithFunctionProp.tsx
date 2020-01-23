import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const Button = ({
  clickFunction,
  text
}: {
  clickFunction: any;
  text: string;
}): JSX.Element => {
  return (
    <StyledButton
      className="button is-success is-outlined"
      onClick={clickFunction}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
