import {
    RECEIVE_PRODUCTS
} from '../actions/product_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}