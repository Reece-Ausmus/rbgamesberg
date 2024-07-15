import React from 'react';
import './globals.css';
import Banner from './components/Banner';
import GamePortal from './components/GamePortal';
// import Layout from './layout';

export default function Home() {
  return (
    <body>
    <div className='home_background'>
      <Banner />
      <div className='games_container'>
        <GamePortal href='/games/tictactoe' imageSrc='/image.png' text='tic-tac-toe'></GamePortal>
        <GamePortal href='/login' imageSrc='/image.png' text='game name'></GamePortal>
        <GamePortal href='/login' imageSrc='/image.png' text='game name'></GamePortal>
      </div>
    </div>
  </body>
  );
}
