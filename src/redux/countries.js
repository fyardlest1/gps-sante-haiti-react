import * as ActionTypes from './ActionTypes';

export const Countries = (state = {
    isLoading: true,
    errMess: null,
    countries: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUNTRIES:
            return { ...state, isLoading: false, errMess: null, countries: action.payload };

        case ActionTypes.COUNTRIES_LOADING:
            return { ...state, isLoading: true, errMess: null, countries: [] }

        case ActionTypes.COUNTRIES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
