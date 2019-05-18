import React, { Fragment } from 'react';
import styled from 'styled-components';

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

  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

const MemeCardSquareImg = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 0;
  min-width: 0;
`;

const MemeCardSquare = ({ img, counter } : { img: any, counter: any }) => {
  return (
    <Fragment>
      <MemeCardSquareAspectRatio>
        <MemeCardSquareContainer>
          <MemeCardSquareImg
            src={img}
          />
        </MemeCardSquareContainer>
      </MemeCardSquareAspectRatio>
    </Fragment>
  )
}

export default MemeCardSquare;