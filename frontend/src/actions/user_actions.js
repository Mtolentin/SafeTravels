import * as UserUtil from '../util/user_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});
  
  // This will be used to redirect the user to the login page upon signup
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});
  
  // We dispatch this one to show authentication errors on the frontend
export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});



export const getUsers = () => dispatch => (
    UserUtil.fetchUsers()
      .then(users => dispatch(receiveUsers(users)))
      .catch(err => dispatch(receiveUserErrors(err.response.data)))
);
  
export const getUser = id => dispatch => (
    UserUtil.fetchUser(id)
        .then((user) => dispatch(receiveUser(user)))
        .catch(err => dispatch(receiveUserErrors(err.response.data)))
);



