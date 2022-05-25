import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    },
})

const authAxiosConfig: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    },
})

const authInterceptor = (config: AxiosRequestConfig) => {
    config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

authAxiosConfig.interceptors.request.use(authInterceptor)

export {
    axiosConfig,
    authAxiosConfig,
}
