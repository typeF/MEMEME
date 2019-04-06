import React from 'react';
import { Button, ButtonWithFunctionProp } from "../../components/Button/";

const Home = () => {
  return (
    <ButtonWithFunctionProp 
      clickFunction={() => console.log('allo')} 
      text={'Hello'} 
    />
  )
}

export default Home;