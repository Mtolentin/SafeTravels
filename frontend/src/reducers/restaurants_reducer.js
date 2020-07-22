import {
    RECEIVE_RESTAURANTS
} from '../actions/restaurant_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        default:
            return state;
    }
}