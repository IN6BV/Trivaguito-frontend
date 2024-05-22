import { useState } from "react";
import { getUser as getUserRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useFetchUsers =  () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const userData = await getUserRequest();
        console.log(userData);
        if(userData.error){
            return toast.error(
                userData.error,
                userData.e?.response?.data || 'Error ocurred when reading users'
            )
        }

        setUsers(userData.data.users)
        return userData.data;
    }
    return{
        users,
        getUsers,
        allUsers: users?.users,
    }
}