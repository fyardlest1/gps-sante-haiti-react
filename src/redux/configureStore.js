import { createStore, combineReducers } from 'redux';
import { Comments } from './comments';
import { Countries } from "./countries";
import { Hospitals } from './hospitals';
import { Partners } from "./partners";
import { Promotions } from "./promotions";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            countries: Countries,
            hospitals: Hospitals,
            partners: Partners,
            promotions: Promotions
        })
    )
    return store;
}