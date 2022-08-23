import { FETCH_WEATHER_DETAILS } from '../actions/types';

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_DETAILS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}