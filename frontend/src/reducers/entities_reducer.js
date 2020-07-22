import { combineReducers } from "redux";
import posts from './posts_reducer';
import restaurants from './restaurants_reducer';

import hotels from './hotels_reducer';
import activities from './activities_reducer';

const entitiesReducer = combineReducers({
    posts,
    restaurants,
    hotels,
    activities
});
  
export default entitiesReducer;