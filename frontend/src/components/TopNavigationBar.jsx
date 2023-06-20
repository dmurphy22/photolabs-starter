import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favPhotosID, topics, getPhotosByTopicID }) => {
  return (
    <div className='top-nav-bar'>
      <span className='top-nav-bar__logo'>PhotoLabs</span>
      <div className='top-nav-bar__components'>
        <TopicList topics={topics} getPhotosByTopicID={getPhotosByTopicID} />
        <FavBadge isFavPhotoExist={favPhotosID.length ? true : false} />
      </div>
    </div>
  );
};

export default TopNavigation;
