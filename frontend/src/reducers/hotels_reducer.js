import {
    RECEIVE_HOTELS
} from '../actions/hotel_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HOTELS:
            return action.hotels;
        default:
            return state;
    }
}