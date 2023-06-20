import { useReducer } from 'react';

const initialState = {
  favPhotosID: [],
  isModalVisible: false,
  selectedPhoto: null,
};

const actionTypes = {
  HANDLE_MODAL_CLICK: 'HANDLE_MODAL_CLICK',
  HANDLE_CLOSE_MODAL: 'HANDLE_CLOSE_MODAL',
  UPDATE_TO_FAV_PHOTOS_IDS: 'UPDATE_TO_FAV_PHOTOS_IDS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_MODAL_CLICK:
      return { ...state, selectedPhoto: action.payload, isModalVisible: true };
    case actionTypes.HANDLE_CLOSE_MODAL:
      return { ...state, isModalVisible: false };
    case actionTypes.UPDATE_TO_FAV_PHOTOS_IDS:
      let favPhotos = [...state.favPhotosID];
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
    dispatch({ type: actionTypes.HANDLE_MODAL_CLICK, payload: photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: actionTypes.HANDLE_CLOSE_MODAL });
  };

  const updateToFavPhotosIDs = id => {
    dispatch({ type: actionTypes.UPDATE_TO_FAV_PHOTOS_IDS, payload: id });
  };

  return {
    state,
    updateToFavPhotosIDs,
    handleModalClick,
    handleCloseModal,
  };
};

export default useApplicationData;
