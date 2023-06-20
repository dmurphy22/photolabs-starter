import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';

export const PhotoDetailsModal = ({
  photo,
  handleCloseModal,
  favPhotosID,
  setFavPhotosID,
  handleFavClick,
}) => {
  let favArr = [];

  return (
    <div className='photo-details-modal'>
      <button
        className='photo-details-modal--close-button'
        onClick={handleCloseModal}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_428_287)'>
            <path
              d='M14.0625 3.9375L3.9375 14.0625'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.0625 14.0625L3.9375 3.9375'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_428_287'>
              <rect width='18' height='18' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal--header'>
        <div className='photo-details-modal__images'>
          <img src={photo.urls.full} className='photo-details-modal__image' />
        </div>
        <div className='photo-details-modal__photographer-details'>
          <div className='photo-list__user-details'>
            <img
              src={photo.user.profile}
              className='photo-list__user-profile'
            />
            <div>
              <div className='photo-list__user-info'>{photo.user.name}</div>
              <span className='photo-list__user-location'>
                {photo.location.city}, {photo.location.country}
              </span>
            </div>
          </div>
        </div>

        <PhotoList
          photos={Object.values(photo.similar_photos)}
          favPhotosID={favPhotosID}
          setFavPhotosID={setFavPhotosID}
          handleFavClick={handleFavClick}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
