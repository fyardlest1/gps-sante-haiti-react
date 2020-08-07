import * as ActionTypes from "./ActionTypes";

export const Hospitals = (
  state = {
    isLoading: true,
    errMess: null,
    hospitals: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_HOSPITALS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        hospitals: action.payload,
      };
    case ActionTypes.HOSPITALS_LOADING:
      return { ...state, isLoading: true, errMess: null, hospitals: [] };
    case ActionTypes.HOSPITALS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
