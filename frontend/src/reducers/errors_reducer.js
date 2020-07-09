import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PostErrorsReducer from './post_errors_reducer';
import ProductErrorsReducer from './product_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  post: PostErrorsReducer,
  product: ProductErrorsReducer
});