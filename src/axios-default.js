import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-161ba.firebaseio.com/'
});

export default instance;