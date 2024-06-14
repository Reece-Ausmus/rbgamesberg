import React from 'react';
import './globals.css';
import Banner from './Banner';

export default function Home() {
  return (
    <div className='w-screen h-screen bg-gray-300'>
      <Banner />
      <div className='p-4 text-scheme1d'>
        games here
      </div>
    </div>
  );
}
