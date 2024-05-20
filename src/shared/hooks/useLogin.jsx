import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { login as loginRequest } from "../../services/api";
import { login as loginRequest } from "../../services/api";

export const useLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
export const useLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    const login = async (email, password) => {
        setIsLoading(true);
    const login = async (email, password) => {
        setIsLoading(true);

        const response = await loginRequest({
            email,
            password
        });
        });

        setIsLoading(false);
        if (response.error) {
        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
        }

        const { userDetails } = response.data;
        const { userDetails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDetails));

        switch (userDetails.role) {
            case 'USER':
                navigate('/');
                break;
            case 'PLATFORM_MANAGER':
                navigate('/plataformManager');
                break;
            case 'HOTEL_ADMINISTRATION':
                navigate('/hotelManager');
                break;
            default:
                navigate('/');
        }
    };

    return {
        localStorage.setItem('user', JSON.stringify(userDetails));

        switch (userDetails.role) {
            case 'USER':
                navigate('/');
                break;
            case 'PLATFORM_MANAGER':
                navigate('/plataformManager');
                break;
            case 'HOTEL_ADMINISTRATION':
                navigate('/hotelManager');
                break;
            default:
                navigate('/');
        }
    };

    return {
        login,
        isLoading
    };
};