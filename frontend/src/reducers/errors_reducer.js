import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PostErrorsReducer from './post_errors_reducer';
import RestaurantErrorsReducer from './restaurant_errors_reducer';
import HotelErrorsReducer from './hotel_errors_reducer';
import ActivityErrorsReducer from './activity_errors_reducer';
import ArticleErrorsReducer from './article_errors_reducer';


export default combineReducers({
  session: SessionErrorsReducer,
  post: PostErrorsReducer,
  restaurant: RestaurantErrorsReducer,
  hotel: HotelErrorsReducer,
  activity: ActivityErrorsReducer,
  article: ArticleErrorsReducer
});