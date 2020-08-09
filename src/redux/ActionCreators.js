import * as ActionTypes from './ActionTypes';
// import { HOSPITALS } from '../shared/hospitals';
import { baseUrl } from '../shared/baseUrl';

export const fetchHospitals = () => (dispatch) => {
  dispatch(hospitalsLoading());
  
  return fetch(baseUrl + 'hospitals')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(hospitals => dispatch(addHospitals(hospitals)))
    .catch(error => dispatch(hospitalsFailed(error.message)));
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

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + 'comments')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (hospitalId, rating, author, text) => dispatch => {

  const newComment = {
    hospitalId: hospitalId,
    rating: rating,
    author: author,
    text: text
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log('post comment', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
    });
};

export const fetchPromotions = () => dispatch => {
  dispatch(promotionsLoading());

  return fetch(baseUrl + 'promotions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then(response => response.json())
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess
});

export const addPromotions = promotions => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions
});
