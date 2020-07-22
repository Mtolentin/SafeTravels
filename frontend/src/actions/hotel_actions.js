import * as HotelUtil from '../util/hotels_util';

export const RECEIVE_HOTELS = "RECEIVE_HOTELS";

export const recieveHotels = hotels => ({
    type: RECEIVE_HOTELS,
    hotels
});

export const fetchHotels = () => dispatch => (
    HotelUtil.getHotels()
        .then(hotels => dispatch(recieveRestaurants(hotels)))
);