import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  imageSource,
  handleClick,
  isFav,
  photo,
  handleFavClick,
}) => {
  return (
    <div className='photo-list__item'>
      <PhotoFavButton handleFavClick={handleFavClick} isFav={isFav} />
      <img
        src={imageSource}
        className='photo-list__image'
        onClick={handleClick}
      />
      <div className='photo-list__user-details'>
        <img src={photo.user.profile} className='photo-list__user-profile' />
        <div>
          <div className='photo-list__user-info'>{photo.user.name}</div>
          <span className='photo-list__user-location'>
            {photo.location.city}, {photo.location.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
