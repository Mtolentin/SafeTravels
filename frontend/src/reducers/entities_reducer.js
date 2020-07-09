import { combineReducers } from "redux";
import posts from './posts_reducer';
import products from './products_reducer';

const entitiesReducer = combineReducers({
    posts,
    products
});
  
export default entitiesReducer;