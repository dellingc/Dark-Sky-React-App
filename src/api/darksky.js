import axios from 'axios';

const devURL = 'http://localhost:8000/loc'
const prodURL = 'https://weather-redis-app.herokuapp.com/loc'

export default axios.create({
    baseURL: devURL
})