import { combineReducers } from "redux";
import posts from './posts_reducer';
import restaurants from './restaurants_reducer';
import articles from './articles_reducer';
import hotels from './hotels_reducer';
import activities from './activities_reducer';

const entitiesReducer = combineReducers({
    posts,
    restaurants,
    hotels,
    activities,
    articles
});
  
export default entitiesReducer;