import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// localhost:5173/api/...... => "/"
// localhost:8001/api/.....
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
});

export const generateShortUrlId = (data) => api.post('/api/url', data);
export const getAllUrls = () => api.get('/api/url/all');
export const redirectToUrl = (shortId) => api.get(`/api/url/short/${shortId}`);




export default api;