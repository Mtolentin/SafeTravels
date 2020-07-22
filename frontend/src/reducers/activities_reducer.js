import {
    RECEIVE_ACTIVITIES
} from '../actions/activity_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return action.activities;
        default:
            return state;
    }
}