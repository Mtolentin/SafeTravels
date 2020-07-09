import * as ProductUtil from '../util/products_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const recieveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProductErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const fetchProducts = () => dispatch => (
    ProductUtil.getProducts()
        .then(products => dispatch(recieveProducts(products)))
        .catch(err => dispatch(receiveProductErrors(err.response.data)))
)