import axios from "axios";
import { BackendUser, LoginUser } from "types"
import http from '../../../http/axios'

export const useUserApi = () => {

    const fetchAllUsers = async () => {
        const response: BackendUser = await http.get('/users');
        return response?.data;
    }
    
    const fetchUser = async (email: string) => {
        const response: BackendUser = await http.get(`users/${email}`);
        return response;
    }

    const fetchUserById = async (id: string) => {
        const response: BackendUser = await http.get(`users/${id}`);
        return response;
    }

    const createUser = async (user: BackendUser) => {
        const response: BackendUser = await http.post('users/createUser', user);
        return response;
    }

    const updateUser = async (id: string, user: BackendUser) => {
        const response: BackendUser = await http.put(`users/updateUser/${id}`, user)
        return response;
    }

    const loginUser = async (userName:string, password: string) => {
        const response: LoginUser = {user: {user: null}, responseMessage: ''}
        try {
            const user: BackendUser = await http.put(`user/login`, {userName: userName, password: password})
            response.user.user = user
        } catch (error) {
            
        }
        return response
    }

    return {
        fetchAllUsers,
        fetchUser,
        fetchUserById,
        createUser,
        updateUser,
        loginUser
    } as const
}

