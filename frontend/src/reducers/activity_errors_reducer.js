import {
    RECEIVE_ACTIVITY_ERRORS,
} from '../actions/activity_actions';

const ActivityErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVITY_ERRORS:
            return Object.assign([], action.errors);
        default:
            return state;
    }
};

export default ActivityErrorsReducer;