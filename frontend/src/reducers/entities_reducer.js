import { combineReducers } from "redux";
import posts from './posts_reducer';
import restaurants from './restaurants_reducer';

const entitiesReducer = combineReducers({
    posts,
    restaurants
});
  
export default entitiesReducer;