import * as RestaurantUtil from '../util/restaurants_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";

export const recieveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
});

export const receiveRestaurantErrors = errors => ({
    type: RECEIVE_RESTAURANT_ERRORS,
    errors
});

export const fetchRestaurants = () => dispatch => (
    RestaurantUtil.getRestaurants()
        .then(restaurants => dispatch(recieveRestaurants(restaurants)))
        .catch(err => dispatch(receiveRestaurantErrors(err.response.data)))
);