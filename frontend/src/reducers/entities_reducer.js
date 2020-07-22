import { combineReducers } from "redux";
import posts from './posts_reducer';

const entitiesReducer = combineReducers({
    posts,
    restaurants,
    hotels,
    activities
});
  
export default entitiesReducer;