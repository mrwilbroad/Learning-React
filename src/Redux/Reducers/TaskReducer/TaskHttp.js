import axios from 'axios';

const ApiToke = '50|O75rK7DhmvO4I49Kyx1rDnX9QTyZvq76yRhrElnb';
/**
 * Http call for API
 * Bearer Token (Provided)
 * interceptor to defining Initial Config
 */
const TaskHttp = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    Authorization: `Bearer ${ApiToke}`,
    Accept: 'application/json'
  }
}) 


TaskHttp.interceptors.request.use((config)=> {
  return config;
})



export default TaskHttp