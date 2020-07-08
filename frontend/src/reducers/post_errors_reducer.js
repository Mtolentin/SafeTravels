import {
    RECEIVE_POST_ERRORS,
    RECEIVE_POST
} from '../actions/post_actions';
  
const PostErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_POST_ERRORS:
        return Object.assign([], action.errors); 
      case RECEIVE_POST:
        return [];
      default:
        return state;
    }
};
  
export default PostErrorsReducer;