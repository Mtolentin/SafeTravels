import axios from 'axios';

export const getArticles = () => {
    return axios.get('/api/articles/');
}

export const writeArticle = data => {
    return axios.post('/api/articles/', data);
}

export const getComments = id => {
    return axios.get(`/api//article/${id}`);
};