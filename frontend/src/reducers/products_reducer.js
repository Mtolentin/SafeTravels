import {
    RECIEVE_PRODUCTS
} from '../actions/product_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECIEVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}