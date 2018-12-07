import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a41ec52ad8b83362ae75a584629e0fa0cd37107ae67d03f92c15451bcbabf40d'
    }
});