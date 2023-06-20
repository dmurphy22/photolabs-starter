import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({ label, getPhotosByTopicID, id }) => {
  return (
    <div className='topic-list__item'>
      <span onClick={getPhotosByTopicID}>{label}</span>
    </div>
  );
};
export default TopicListItem;
