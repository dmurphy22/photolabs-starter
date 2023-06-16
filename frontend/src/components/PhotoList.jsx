import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos }) => {
  return (
    <div className='photo-list '>
      {photos.map(photo => (
        <PhotoListItem key={photo.id} imageSource={photo.urls.regular} />
      ))}
    </div>
  );
};

export default PhotoList;
