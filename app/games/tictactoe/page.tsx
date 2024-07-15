// tictactoe page

import React from 'react';
import '../../globals.css';
import Banner from '../../components/Banner';
import GamePortal from '../../components/GamePortal';

export default function Home() {
  return (
    <body>
      <div className='home_background'>
        <Banner />
        <div className='tictactoeBox'>
          
        </div>
      </div>
    </body>
  );
}
