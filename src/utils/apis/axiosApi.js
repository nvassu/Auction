import axios from 'axios';

const axiosIn = axios.create({
    baseURL: 'http://localhost:8082/'
});

export default axiosIn;