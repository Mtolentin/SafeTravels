import {
    RECEIVE_HOTEL_ERRORS,
} from '../actions/hotel_actions';

const HotelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HOTEL_ERRORS:
            return Object.assign([], action.errors);
        default:
            return state;
    }
};

export default HotelErrorsReducer;