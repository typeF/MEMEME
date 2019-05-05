import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MemeCardFooter from './MemeCardFooter';
import MemeCardImg from './MemeCardImg';

const MemeCardContainer = styled.div`
  display: grid;
  grid-template-rows: 9fr 1.5fr;
  grid-gap: 5px;
  height: 100%;
  min-height: 0;
  min-width: 0;
`;

const MemeCardImgContainer = styled.div`
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  margin-bottom: 3px;
  margin-top: 5px;
  padding: 10px;
  min-height: 0;
  min-width: 0;
`;

const MemeCard = ({ img, counter,  footer } : { img: any, counter: any, footer: any}) => {
  return (
    <Fragment>
      <MemeCardContainer>
        <MemeCardImgContainer>
          <MemeCardImg img={img}/>
        </MemeCardImgContainer>
        <MemeCardFooter text={footer}/>
      </MemeCardContainer>
    </Fragment>
  )
}

export default MemeCard;