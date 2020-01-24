import React from "react";
import styled from "styled-components";
import MemeCardImg from "../MemeCardImg";

const MemeCardSquareAspectRatio = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    height: 0;
    display: inline-block;
    padding-top: 100%;
    width: 1px;
    position: relative;
  }
`;

const MemeCardSquareContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  padding: 10px;
  cursor: pointer;
  &:hover {
    border: 2px dotted rgba(0, 0, 0, 1);
  }
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

const MemeCardSquare = ({
  img,
  counter,
  clickHandler
}: {
  img: string;
  counter: any;
  clickHandler: any;
}): JSX.Element => {
  return (
    <MemeCardSquareAspectRatio>
      <MemeCardSquareContainer onClick={(): void => clickHandler(img)}>
        {img !== "" && <MemeCardImg img={img} />}
      </MemeCardSquareContainer>
    </MemeCardSquareAspectRatio>
  );
};

export default MemeCardSquare;
