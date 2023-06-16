import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = () => {
  const renderPhotoListItems = () => {
    // Create an array of three elements
    const items = Array(3).fill(null);

    // Map over the array and return the PhotoListItem component with desired props
    return items.map((item, index) => (
      <PhotoListItem
        key={index} // Make sure to provide a unique key for each item
        username={`User ${index + 1}`}
        imageSource={`${process.env.PUBLIC_URL}/Image-${
          index + 1
        }-Regular.jpeg`}
        id={`${index + 1}`}
        profile={`${process.env.PUBLIC_URL}/profile-${index + 1}.jpg`}
      />
    ));
  };

  return <div className='photo-list '>{renderPhotoListItems()}</div>;
};

PhotoList.defaultProps = {
  photos: [
    {
      id: '1',
      location: {
        city: 'Montreal',
        country: 'Canada',
      },
      urls: {
        full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
        regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      },
      user: {
        id: '1',
        username: 'exampleuser',
        name: 'Joe Example',
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      },
    },
    {
      id: '2',
      location: {
        city: 'Toronto',
        country: 'Canada',
      },
      urls: {
        full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
        regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
      },
      user: {
        id: '2',
        username: 'exampleuser',
        name: 'Joe Example',
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      },
    },
    {
      id: '3',
      location: {
        city: 'Ottawa',
        country: 'Canada',
      },
      urls: {
        full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
        regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
      },
      user: {
        id: '3',
        username: 'exampleuser',
        name: 'Joe Example',
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      },
    },
  ],
};

export default PhotoList;
