import axios from 'axios';
import NProgress from 'nprogress';

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
//use axios interceptors (middlewere) to show a progress bar on request and on response
//this is not a good practise for multiple events
// apiClient.interceptors.request.use(config => {
//   NProgress.start();
//   return config;
// });
// apiClient.interceptors.response.use(response => {
//   NProgress.done();
//   return response;
// });
export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
