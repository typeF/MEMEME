import React from "react";
import styled from "styled-components";

const NotLoggedInContainer = styled.div`
  color: white;
  font-family: "Righteous", sans-serif;
  font-size: 4rem;
  grid-area: content;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
`;

const NotLoggedIn = (): JSX.Element => {
  return <NotLoggedInContainer>Not Logged In.</NotLoggedInContainer>;
};
export default NotLoggedIn;
