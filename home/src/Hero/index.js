import React from 'react';
import {
  Container,
  BackgroundWrapper,
  Content,
} from './Hero.module.css';

function Hero() {
  return (
    <div className={Container}>
      <div className={BackgroundWrapper}></div>
      <div className={Content}>
        <img src='/image/nicolas.jpg' />
        <h1>Nicolas Laurent</h1>
        <h2>- Product Owner -</h2>
      </div>
    </div>
  );
}

export default Hero;