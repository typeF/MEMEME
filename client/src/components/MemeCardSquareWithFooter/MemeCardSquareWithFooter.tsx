import React, { Fragment } from "react";
import styled from "styled-components";
import MemeCardImg from "../MemeCard/MemeCardImg";
import MemeCardFooter from "../MemeCard/MemeCardFooter";

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

const MemeCardSquareWithFooter = ({
  footer,
  img,
  counter,
  clickHandler
}: {
  footer: string;
  img: string;
  counter: any;
  clickHandler: any;
}): JSX.Element => {
  return (
    <Fragment>
      <MemeCardSquareAspectRatio>
        <MemeCardSquareContainer onClick={(): void => clickHandler(img)}>
          {img !== "" && <MemeCardImg img={img} />}
        </MemeCardSquareContainer>
      </MemeCardSquareAspectRatio>
      <MemeCardFooter text={footer} />
    </Fragment>
  );
};

export default MemeCardSquareWithFooter;
