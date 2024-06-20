import Link from 'next/link';
import React from 'react';
import './globals.css';

interface GamePortalProps {
  href: string;
  imageSrc: string;
  text: string;
}

const GamePortal: React.FC<GamePortalProps> = ({ href, imageSrc, text }) => {
  return (
    <Link href={href} passHref>
      <button className='game_portal'>
        <div className='game_portal_overlay'>
          {text}
        </div>
        <img src={imageSrc} className='portal_image' />
      </button>
    </Link>
  );
}

export default GamePortal;