import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const login = async (username, password) => {
    const response = await api.post('/login', { username, password });
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const register = async (username, password) => {
    const response = await api.post('/register', { username, password });
    if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const getReminders = async () => {
    const response = await api.get('/reminders',
        
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

    );
    return response.data;
};

