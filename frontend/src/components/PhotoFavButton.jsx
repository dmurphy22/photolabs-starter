import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = ({ isClicked, handleClick }) => {
  return (
    <div
      className={`photo-list__fav-icon ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className='photo-list__fav-icon-svg'>
        <FavBadge isClicked={isClicked} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
