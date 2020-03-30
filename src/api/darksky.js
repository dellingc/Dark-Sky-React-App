import axios from 'axios';

export default axios.create({
    baseURL: 'https://weather-redis-app.herokuapp.com/loc/'
})