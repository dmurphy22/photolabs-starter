import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import topics from '../mocks/topics';
import FavBadge from './FavBadge';

const TopNavigation = favPhotosID => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <div className='top-nav-bar__components'>
        <TopicList topics={topics} />
        <FavBadge
          isFavPhotoExist={favPhotosID.favPhotosID.length ? true : false}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
