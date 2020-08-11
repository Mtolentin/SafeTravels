import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts');
};

export const getUserPosts = id => {
  return axios.get(`/api/posts/user/${id}`);
};

export const writePost = data => {
  return axios.post('/api/posts/', data);
};

export const patchPost = (data, post) => {
    return axios.patch(`/api/posts/${post.id}`, data);
};

export const deletePost = postId => {
    // debugger;
    return axios.delete(`/api/posts/${postId}`);
};