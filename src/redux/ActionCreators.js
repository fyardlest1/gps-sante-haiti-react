import * as ActionTypes from './ActionTypes';
import { HOSPITALS } from '../shared/hospitals';

export const addComment = (hospitalId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        hospitalId: hospitalId,
        rating: rating,
        author: author,
        text: text
    }
})

export const fetchHospitals = () => (dispatch) => {
  dispatch(hospitalsLoading());

  setTimeout(() => {
    dispatch(addHospitals(HOSPITALS));
  }, 2000);
};

export const hospitalsLoading = () => ({
  type: ActionTypes.HOSPITALS_LOADING,
});

export const hospitalsFailed = (errMess) => ({
  type: ActionTypes.HOSPITALS_FAILED,
  payload: errMess,
});

export const addHospitals = (hospitals) => ({
  type: ActionTypes.ADD_HOSPITALS,
  payload: hospitals,
});