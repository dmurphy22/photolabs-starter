import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import photos from '../mocks/photos';

const HomeRoute = () => {
  return (
    <div className='home-route'>
      <TopNavigation />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
