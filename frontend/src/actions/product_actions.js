import * as ProductUtil from '../util/products_util';

export const RECIEVE_PRODUCTS = "RECEIVE_PRODUCT";
export const RECIEVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const recieveProducts = products => ({
    type: RECIEVE_PRODUCTS,
    products
});

export const receiveProductErrors = errors => ({
    type: RECIEVE_PRODUCT_ERRORS,
    errors
});

