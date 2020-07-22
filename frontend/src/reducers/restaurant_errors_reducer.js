import {
    RECEIVE_RESTAURANT_ERRORS,
} from '../actions/restaurant_actions';

const RestaurantErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESTAURANT_ERRORS:
            return Object.assign([], action.errors);
        default:
            return state;
    }
};

export default RestaurantErrorsReducer;