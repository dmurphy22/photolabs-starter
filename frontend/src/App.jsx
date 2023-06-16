import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import ParentPhotoListItem from './components/ParentPhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import topics from './mocks/topics';
import photos from './mocks/photos';
import TopNavigation from './components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className='App'>
    <TopNavigation />
    <PhotoList photos={photos} />
  </div>
);

export default App;
