import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'prod' && import.meta.env.VITE_APP_BACKEND_URL,
});

export const getAllTodos = async () => {
    try {
        const response = await api('/get-all-todos');
        if (response.status === 200) {
            return await response.data;
        } else {
            // eslint-disable-next-line no-console
            console.error('Promise resolved but HTTP status failed');
            throw new Error('Promise resolved but HTTP status failed');
        }
    } catch {
        // eslint-disable-next-line no-console
        console.error('Promise rejected');
        throw new Error('Promise rejected');
    }
};
