import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import photos from '../mocks/photos';

const HomeRoute = props => {
  return (
    <div className='home-route'>
      <TopNavigation favPhotosID={props.favPhotosID} />
      <PhotoList
        photos={photos}
        handleClick={props.handleModalClick}
        favPhotosID={props.favPhotosID}
        setFavPhotosID={props.setFavPhotosID}
        handleFavClick={props.updateToFavPhotosIDs}
      />
    </div>
  );
};

export default HomeRoute;
