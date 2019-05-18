import React from 'react';
import styled from 'styled-components';
import MemeCardImg from '../MemeCard/MemeCardImg';

const MemeCardImgContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const MemeCardStretch = ({ img } : { img: string }) => {
  return (
    <MemeCardImgContainer>
      <MemeCardImg img={img}/>
    </MemeCardImgContainer>
  )
}

export default MemeCardStretch;