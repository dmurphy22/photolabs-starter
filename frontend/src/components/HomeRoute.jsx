import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import photos from '../mocks/photos';

const HomeRoute = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='home-route'>
      <TopNavigation />
      <PhotoList
        photos={photos}
        isClicked={isClicked}
        handleClick={handleClick}
      />
    </div>
  );
};

export default HomeRoute;
