import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/trivaguito/v1', // Asegúrate de que esta URL base sea correcta
    timeout: 5000
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const register = async (data) => {
    try {
        return await apiClient.post('/registro/add', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getUser = async () => {
    try {
        return await apiClient.get('/registro');
    } catch (e) {
        return {
            error: true,
            e
        };
    }
}

export const getUserById = async (userId) => {
    try {
        return await apiClient.get(`/registro/byId/${userId}`); 
    } catch (e) {
        return {
            error: true,
            e
        };
    }
}

export const userUpdate = async (userId, data) => {
    try {
        console.log(userId)
        return await apiClient.put(`/registro/update/${userId}`, data); 
    } catch (e) {
        console.log(data, userId)
        return {
            error: true,
            e
        };
    }    
};


/***Hoteles */
export const registerHotel = async (data) => {
    try {
        return await apiClient.post('/hotel/addHotel', data);
        console.log(data)
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

/**Habitaciones */
export const registroHabitacion = async(data)  => {
    try {
        return await apiClient.post('/habitacion/addHabitacion', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
}

export const fetchHotelReservations = async () => {
    try {
        return await apiClient.get('/hotel/getHotelsForReport');
    } catch (e) {
        return {
            error: true,
            e
        };
    }
}
