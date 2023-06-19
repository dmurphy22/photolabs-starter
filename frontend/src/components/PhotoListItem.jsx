import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ imageSource, isClicked, handleClick }) => {
  return (
    <div className='photo-list__item'>
      <PhotoFavButton isClicked={isClicked} handleClick={handleClick} />
      <img src={imageSource} className='photo-list__image' alt='' />
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: '1',
  location: {
    city: 'Montreal',
    country: 'Canada',
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: 'Joe Example',
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default PhotoListItem;
