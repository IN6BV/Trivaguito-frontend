import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { login as loginRequest} from "../../services/api";

export  const useLogin = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    
    const login = async(email, password) => {
        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'ocurrio un error al iniciar sesion'
            )
        }

        const {userDetails} = response.data

        localStorage.setItem('user', JSON.stringify({userDetails}))

        navigate('/')
    }

    return{
        login,
        isLoading
    }
}