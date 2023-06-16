import React from 'react';
import PhotoListItem from './PhotoListItem';

const ParentPhotoListItem = () => {
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

  return <div>{renderPhotoListItems()}</div>;
};

export default ParentPhotoListItem;
