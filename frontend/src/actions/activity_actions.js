import * as ActivityUtil from '../util/activities_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY_ERRORS = "RECEIVE_ACTIVITY_ERRORS";

export const recieveActivities = activities => ({
    type: RECEIVE_ACTIVITIES,
    activities
});

export const receiveActivityErrors = errors => ({
    type: RECEIVE_ACTIVITY_ERRORS,
    errors
});

export const fetchActivities = () => dispatch => (
    ActivityUtil.getActivities()
        .then(activities => dispatch(recieveActivities(activities)))
        .catch(err => dispatch(receiveActivityErrors(err.response.data)))
);