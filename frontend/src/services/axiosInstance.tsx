import axios, { AxiosRequestConfig } from 'axios';

export const API_BASE_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const get = async (url: string, config: AxiosRequestConfig = {}) => {
    try {
        const response = await axiosInstance.get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const post = async (url: string, data: any = {}, config: AxiosRequestConfig = {}) => {
    try {
        const response = await axiosInstance.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const put = async (url: string, data: any = {}, config: AxiosRequestConfig = {}) => {
    try {
        const response = await axiosInstance.put(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const del = async (url: string, config: AxiosRequestConfig = {}) => {
    try {
        const response = await axiosInstance.delete(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};