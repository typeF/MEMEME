import React from "react";
import styled from "styled-components";
import giphyLogo from "../../assets/images/giphyLogo.png";

const FooterContainer = styled.div`
  grid-area: footer;
  margin-left: auto;
  margin-right: 0;
`;

const GiphyLogo = styled.img``;

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <GiphyLogo src={giphyLogo}></GiphyLogo>
    </FooterContainer>
  );
};

export default Footer;
