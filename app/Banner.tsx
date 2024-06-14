import React from 'react';
import Button from '@mui/material/Button';

const Banner = () => {
  return (
    <div className="bg-scheme1 text-white p-2 shadow-md border-b-2 border-scheme1d">
      <div className="flex items-center">
        {/* title and subtitle */}
        <div className="h-full p-1 ml-2 text-scheme1d">
          <h1 className="text-4xl font-bold">gaming and such</h1>
          <p className="text-2sm mt-2">we like to game (subtitle)</p>
        </div>
        {/* link buttons */}
        <div className=" h-full ml-auto p-2">
          <Button variant="contained" size="large" className='bg-scheme3 mx-1'>settings</Button>
          <Button variant="contained" size="large" className='bg-scheme3 mx-1'>account</Button>
          <Button variant="contained" size="large" className='bg-scheme3 mx-1'>login</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;