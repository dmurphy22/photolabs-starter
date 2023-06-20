import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotosIDs,
    handleModalClick,
    handleCloseModal,
    getPhotosByTopicID,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favPhotosID={state.favPhotosID}
        updateToFavPhotosIDs={updateToFavPhotosIDs}
        handleModalClick={handleModalClick}
        getPhotosByTopicID={getPhotosByTopicID}
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
