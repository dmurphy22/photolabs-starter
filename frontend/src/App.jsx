import React, { useEffect, useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import axios from 'axios';

const App = () => {
  const { state, updateToFavPhotosIDs, handleModalClick, handleCloseModal } =
    useApplicationData();
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('/api/photos').then(res => setPhotos(res.data));
  });

  useEffect(() => {
    axios.get('/api/topics').then(res => setTopics(res.data));
  });

  return (
    <div className='App'>
      <HomeRoute
        photos={photos}
        topics={topics}
        favPhotosID={state.favPhotosID}
        updateToFavPhotosIDs={updateToFavPhotosIDs}
        handleModalClick={handleModalClick}
      />
      {state.isModalVisible && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          handleCloseModal={handleCloseModal}
          favPhotosID={state.favPhotosID}
          setFavPhotosID={state.setFavPhotosID}
          handleFavClick={updateToFavPhotosIDs}
        />
      )}
    </div>
  );
};

export default App;
