import axios from 'axios';
import API_URL from '../config';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchReview = async (id) => {
    try {
        const response = await api.get(`/reviews/${id}`);
        return response.data;
    } catch (error) {
        console.error('API error:', error.response);
        throw new Error('Failed to fetch review');
    }
};

export const fetchReviews = async () => {
    try {
        const response = await api.get('/reviews');
        return response.data;
    } catch (error) {
        console.error('API error:', error.response);
        throw new Error('Failed to fetch reviews');
    }
};

export const createReview = async (reviewData) => {
    try {
        const response = await api.post('/reviews', reviewData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('API error:', error.response);
        throw new Error('Failed to create review');
    }
};

export const updateReview = async (id, reviewData) => {
    try {
        const response = await api.put(`/reviews/${id}`, reviewData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('API error:', error.response);
        throw new Error('Failed to update review');
    }
};

export const deleteReview = async (id) => {
    try {
        const response = await api.delete(`/reviews/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('API error:', error.response);
        throw new Error('Failed to delete review');
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials); // Corrected endpoint
        return response.data;
    } catch (error) {
        console.error('Login API error:', error.response);
        throw new Error('Failed to login');
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData); // Corrected endpoint
        return response.data;
    } catch (error) {
        console.error('Registration API error:', error.response);
        throw new Error('Failed to register user');
    }
};
