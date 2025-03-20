import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication services
export const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post('/token', new URLSearchParams({
        'username': username,
        'password': password
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('token');
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};

// Reminders services
export const reminderService = {
  getReminders: async () => {
    try {
      const response = await api.get('/reminders');
      return response.data;
    } catch (error) {
      console.error('Error fetching reminders:', error);
      throw error;
    }
  },
  
  createReminder: async (reminderData) => {
    try {
      const response = await api.post('/reminders', reminderData);
      return response.data;
    } catch (error) {
      console.error('Error creating reminder:', error);
      throw error;
    }
  }
};

export default api; 