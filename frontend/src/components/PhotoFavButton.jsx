import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { handleClick, isFav, handleFavClick } = props;

  return (
    <div onClick={handleFavClick} className='photo-list__fav-icon'>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon
          fill={isFav ? '#FF0000' : '#EEEEEE'}
          height='27'
          width='25'
          outlineWidth=''
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
