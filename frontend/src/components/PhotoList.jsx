import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, handleClick, favPhotosID, handleFavClick }) => {
  return (
    <div className='photo-list'>
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          imageSource={photo.urls.regular}
          handleFavClick={() => handleFavClick(photo.id)}
          handleClick={() => handleClick(photo)}
          isFav={favPhotosID.includes(photo.id)}
        />
      ))}
    </div>
  );
};

export default PhotoList;
