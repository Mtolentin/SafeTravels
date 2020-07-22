import axios from 'axios';

export const getRestaurants = () => {
  return axios.get('/api/restaurants/');
}