import {
    RECEIVE_PRODUCT_ERRORS,
} from '../actions/product_actions';

const ProductErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT_ERRORS:
            return Object.assign([], action.errors);
        default:
            return state;
    }
};

export default ProductErrorsReducer;