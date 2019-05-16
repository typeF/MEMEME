import React, { Fragment } from 'react';
import styled from 'styled-components';

const MemeCardSquareContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  padding: 10px;
`;

const MemeCardSquareImg = styled.img`
  border-radius: 10px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 0;
  min-width: 0;
`;

const MemeCardSquare = ({ img, counter } : { img: any, counter: any }) => {
  return (
    <Fragment>
      <MemeCardSquareContainer>
        <MemeCardSquareImg
          src={img}
        />
      </MemeCardSquareContainer>
    </Fragment>
  )
}

export default MemeCardSquare;