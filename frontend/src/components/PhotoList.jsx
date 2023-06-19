import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, isClicked, handleClick }) => {
  const handleItemClick = () => {
    handleClick();
  };

  return (
    <div className='photo-list'>
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.urls.regular}
          isClicked={isClicked}
          handleClick={handleItemClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;
