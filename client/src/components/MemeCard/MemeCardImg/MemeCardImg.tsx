import React from "react";
import styled from "styled-components";

const Img = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 0;
  min-width: 0;
`;

const MemeCardImg = ({ img }: { img: string }): JSX.Element => {
  return <Img src={img} />;
};

export default MemeCardImg;
