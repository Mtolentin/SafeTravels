import * as PostUtil from '../util/posts_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const fetchPosts = () => dispatch => (
    PostUtil.getPosts()
      .then(posts => dispatch(receivePosts(posts)))
      .catch(err => dispatch(receivePostErrors(err.response.data)))
);
  
export const fetchUserPosts = id => dispatch => (
    PostUtil.getUserPosts(id)
        .then(posts => dispatch(receivePosts(posts)))
        .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const composePost = data => dispatch => (
    PostUtil.writePost(data)
        .then(post => dispatch(receivePost(post)))
        .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const updatePost = (data, post) => dispatch => (
    PostUtil.patchPost(data, post)
        .then(post => dispatch(receivePost(post)))
        .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const deletePost = postId => dispatch => (
    PostUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
        .catch(err => dispatch(receivePostErrors(err.response.data)))
);