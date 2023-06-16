import React, { useState, useEffect } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`photo-list__fav-icon ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className='photo-list__fav-icon-svg'>
        <FavBadge isFavPhotoExist={isClicked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
