import axios from 'axios'
import { getAccessToken } from './utils'

const api = axios.create({
    baseURL: 'https://electropia.herokuapp.com',
    headers: {
        'Authorization': getAccessToken()
    }
})


export default api;