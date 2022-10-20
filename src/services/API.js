import axios from 'axios';

import backendURI from "@/config/app"

const {BACKEND_URI} = backendURI


const API = axios.create({
    baseURL: `${BACKEND_URI}`,
    headers: {'Access-Control-Allow-Origin': '*'}
})

API.defaults.withCredentials = true;
export default API