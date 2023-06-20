import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favPhotosID, topics }) => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <div className='top-nav-bar__components'>
        <TopicList topics={topics} />
        <FavBadge isFavPhotoExist={favPhotosID.length ? true : false} />
      </div>
    </div>
  );
};

export default TopNavigation;
