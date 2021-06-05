import React from 'react';
import { Container, Emoji, Text } from './Home.module.css';

const Home = () => {
  return (
    <div className={Container}>
      <div className={Emoji}>
        <img src='/dev.png' alt='dev' />
        <h1 className={Text}>Nicolas Laurent</h1>
      </div>
    </div>
  );
};

export default Home;
