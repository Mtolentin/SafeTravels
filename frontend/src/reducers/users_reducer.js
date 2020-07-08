import {
    RECEIVE_USERS,
    RECEIVE_USER,
} from '../actions/user_actions';
  
  
export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_USERS:
        return action.users;
      case RECEIVE_USER:
        nextState[action.user.id] = action.user;
        return nextState;
      default:
        return state;
    }
}