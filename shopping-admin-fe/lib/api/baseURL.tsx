import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const server = axios.create({
    baseURL: "http://localhost:8080",
})