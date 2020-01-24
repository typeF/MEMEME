import React from "react";
import styled from "styled-components";

const Footer = styled.span`
  color: white;
  display: block;
  font-family: "Revalia", sans-serif;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
`;

const MemeCardFooter = ({ text }: { text: string }): JSX.Element => {
  return <Footer>{text}</Footer>;
};

export default MemeCardFooter;
