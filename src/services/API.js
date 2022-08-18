import axios from 'axios';

import backendURI from "@/config/app"

const {BACKEND_URI} = backendURI

const API = axios.create({
    baseURL: `${BACKEND_URI}`
})


export default API