import * as ActivityUtil from '../util/activities_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";

export const recieveActivities = activities => ({
    type: RECEIVE_ACTIVITIES,
    activities
});

export const fetchActivities = () => dispatch => (
    ActivitiyUtil.getActivities()
        .then(activities => dispatch(recieveRestaurants(activities)))
);