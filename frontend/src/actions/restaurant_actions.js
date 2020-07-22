import * as RestaurantUtil from '../util/restaurants_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";

export const recieveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
});

export const fetchRestaurants = () => dispatch => (
    RestaurantUtil.getRestaurants()
        .then(restaurants => dispatch(recieveRestaurants(restaurants)))
);