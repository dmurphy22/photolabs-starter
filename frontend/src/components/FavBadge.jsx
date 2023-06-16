import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon
        width={20}
        height={28}
        fill={isFavPhotoExist ? '#C80000' : '#EEEEEE'}
        displayAlert={!!isFavPhotoExist}
      />
    </div>
  );
};

export default FavBadge;
