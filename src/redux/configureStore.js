import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Comments } from './comments';
import { Countries } from "./countries";
import { Hospitals } from './hospitals';
import { Partners } from "./partners";
import { Promotions } from "./promotions";
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            countries: Countries,
            hospitals: Hospitals,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger),
    )
    return store;
}