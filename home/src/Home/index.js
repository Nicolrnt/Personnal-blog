import React from 'react';
import { Container, Emoji } from './Home.module.css';

const Home = () => {
  return (
    <div className={Container}>
      <div className={Emoji}>
        <img src='/dev.png' alt='dev' />
      </div>
    </div>
  );
};

export default Home;
