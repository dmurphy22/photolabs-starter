import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = props => {
  return (
    <div className='home-route'>
      <TopNavigation favPhotosID={props.favPhotosID} topics={props.topics} />
      <PhotoList
        photos={props.photos}
        handleClick={props.handleModalClick}
        favPhotosID={props.favPhotosID}
        setFavPhotosID={props.setFavPhotosID}
        handleFavClick={props.updateToFavPhotosIDs}
      />
    </div>
  );
};

export default HomeRoute;
