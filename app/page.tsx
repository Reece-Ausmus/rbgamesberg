import React from 'react';
import './globals.css';
import Banner from './Banner';

export default function Home() {
  return (
    <body style={{padding: '8px'}}>
      <div className='home_background border-2 border-s2a'>
        <Banner />
        <div>
          games here
        </div>
      </div>
    </body>
  );
}
