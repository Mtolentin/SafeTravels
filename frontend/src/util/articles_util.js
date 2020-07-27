import axios from 'axios';

export const getArticles = () => {
    return axios.get('/api/articles/');
}

export const getComments = id => {
    return axios.get(`/api//article/${id}`);
  };