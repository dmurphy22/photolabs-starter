import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  favPhotosID: [],
  isModalVisible: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

const actionTypes = {
  HANDLE_MODAL_CLICK: 'HANDLE_MODAL_CLICK',
  HANDLE_CLOSE_MODAL: 'HANDLE_CLOSE_MODAL',
  UPDATE_TO_FAV_PHOTOS_IDS: 'UPDATE_TO_FAV_PHOTOS_IDS',
  SET_PHOTOS: 'SET_PHOTOS',
  SET_TOPICS: 'SET_TOPICS',
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
    case actionTypes.SET_PHOTOS:
      return { ...state, photos: action.payload };
    case actionTypes.SET_TOPICS:
      return { ...state, topics: action.payload };
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

  const getPhotosByTopicID = id => {
    axios
      .get(`/api/topics/photos/${id}`)
      .then(res =>
        dispatch({ type: actionTypes.SET_PHOTOS, payload: res.data })
      );
  };

  useEffect(() => {
    axios
      .get('/api/photos')
      .then(res =>
        dispatch({ type: actionTypes.SET_PHOTOS, payload: res.data })
      );
  }, [dispatch]);

  useEffect(() => {
    axios
      .get('/api/topics')
      .then(res =>
        dispatch({ type: actionTypes.SET_TOPICS, payload: res.data })
      );
  }, [dispatch]);

  return {
    state,
    updateToFavPhotosIDs,
    handleModalClick,
    handleCloseModal,
    getPhotosByTopicID,
  };
};

export default useApplicationData;
