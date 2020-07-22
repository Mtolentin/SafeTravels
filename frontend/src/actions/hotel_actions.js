import * as HotelUtil from '../util/hotels_util';

export const RECEIVE_HOTELS = "RECEIVE_HOTELS";
export const RECEIVE_HOTEL_ERRORS = "RECEIVE_HOTEL_ERRORS";

export const recieveHotels = hotels => ({
    type: RECEIVE_HOTELS,
    hotels
});

export const receiveHotelErrors = errors => ({
    type: RECEIVE_HOTEL_ERRORS,
    errors
});

export const fetchHotels = () => dispatch => (
    HotelUtil.getHotels()
        .then(hotels => dispatch(recieveHotels(hotels)))
        .catch(err => dispatch(receiveHotelErrors(err.response.data)))
);