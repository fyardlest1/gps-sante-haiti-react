import { HOSPITALS } from "../shared/hospitals";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
    hospitals: HOSPITALS,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS 
}

export const Reducer = (state = initialState, action) => {
    return state;
}