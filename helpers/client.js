import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
  headers: {
    'X-Api-Key': '' // set the value of this header to your NewsAPI key
  }
});

export default axiosInstance
