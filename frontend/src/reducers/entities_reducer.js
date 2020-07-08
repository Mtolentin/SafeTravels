import { combineReducers } from "redux";
import posts from './posts_reducer';

const entitiesReducer = combineReducers({
    posts
});
  
export default entitiesReducer;