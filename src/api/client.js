import axios from 'axios';
import url from "./config";

// Main Client
const apiClient = axios.create({
    baseURL: url.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Bid Client
export const bidApiClient = axios.create({
    baseURL: url.bidBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Chat Client
export const chatApiClient = axios.create({
    baseURL: url.chatBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Function to set the authorization token
export const setAuthToken = (token) => {
    localStorage.setItem('token', token);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    bidApiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    chatApiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
    localStorage.removeItem('token');
    delete apiClient.defaults.headers.common['Authorization'];
    delete bidApiClient.defaults.headers.common['Authorization'];
    delete chatApiClient.defaults.headers.common['Authorization'];
};

export default apiClient;
