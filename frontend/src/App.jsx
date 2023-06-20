import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, updateToFavPhotosIDs, handleModalClick, handleCloseModal } =
    useApplicationData();

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
