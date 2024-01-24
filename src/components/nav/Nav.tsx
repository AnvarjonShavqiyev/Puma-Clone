import React, { useState, useEffect } from 'react';
import './nav.scss';
import topNavData from '../../db/top-nav-swapper.json';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topNavData.announcements.length);
      setFade(true);
      setTimeout(() => {
        setFade(false);
      }, 3000);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='top-nav-wrapper'>
      <p className={`announcement-text ${fade ? 'fade' : ''}`}>
        {topNavData.announcements[currentIndex][0]}
      </p>
      <Link className={`top-nav-link announcement-text ${fade ? 'fade' : ''}`} to='/'>
        {topNavData.announcements[currentIndex][1]}
      </Link>
    </div>
  );
};

export default Nav;

