import React, { useReducer } from 'react';

const initialState = {
  favPhotosID: [],
  isModalVisible: false,
  selectedPhoto: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_MODAL_CLICK':
      return { ...state, selectedPhoto: action.payload, isModalVisible: true };
    case 'HANDLE_CLOSE_MODAL':
      return { ...state, isModalVisible: false };
    case 'UPDATE_TO_FAV_PHOTOS_IDS':
      let favPhotos = state.favPhotosID;
      if (favPhotos.includes(action.payload)) {
        const idIndex = favPhotos.indexOf(action.payload);
        favPhotos.splice(idIndex, 1);
      } else {
        favPhotos = [...favPhotos, action.payload];
      }
      return { ...state, favPhotosID: favPhotos };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleModalClick = photo => {
    dispatch({ type: 'HANDLE_MODAL_CLICK', payload: photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'HANDLE_CLOSE_MODAL' });
  };

  const updateToFavPhotosIDs = id => {
    dispatch({ type: 'UPDATE_TO_FAV_PHOTOS_IDS', payload: id });
  };

  return {
    state,
    updateToFavPhotosIDs,
    handleModalClick,
    handleCloseModal,
  };
};

export default useApplicationData;
