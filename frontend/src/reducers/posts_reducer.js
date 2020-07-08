import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from '../actions/post_actions';
  
  
export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_POSTS:
        return action.posts;
      case RECEIVE_POST:
        nextState[action.post.id] = action.post;
        return nextState;
      case REMOVE_POST:
        delete nextState[action.postId];
        return nextState;
      default:
        return state;
    }
}