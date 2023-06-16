import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import ParentPhotoListItem from './components/ParentPhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className='App'>
    <TopicList />
    <PhotoList />
  </div>
);

export default App;
