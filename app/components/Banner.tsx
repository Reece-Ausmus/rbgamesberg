import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

const Banner = () => {
  return (
    <div className="bg-s2b text-white p-2">
      <div className="flex items-center">
        {/* title and subtitle */}
        <div className="h-full p-1 ml-2">
          <h1 className="text-4xl font-bold">gaming and such</h1>
          <p className="text-2sm mt-2">we like to game (subtitle)</p>
        </div>
        {/* link buttons */}
        <div className=" h-full ml-auto p-2">
          <Link href="/settings">
            <Button variant="contained" size="large" className='bg-s2a mx-1'>settings</Button>
          </Link>
          <Link href="/account">
            <Button variant="contained" size="large" className='bg-s2a mx-1'>account</Button>
          </Link>
          <Link href="/login">
            <Button variant="contained" size="large" className='bg-s2a mx-1'>login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;