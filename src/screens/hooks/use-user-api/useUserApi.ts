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
        if (user)
        return response;
    }

    const updateUser = async (id: string, user: BackendUser) => {
        const response: BackendUser = await http.put(`users/updateUser/${id}`, user)
        return response;
    }

    const loginUser = async (username:string, password: string) => {
        const response: LoginUser = {user: {user: null}, responseMessage: ''}
        const user: BackendUser = await http.put(`user/login`, {username: username, password: password})
        response.user.user = user
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

