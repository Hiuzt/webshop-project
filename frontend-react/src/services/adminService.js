import { toast } from "react-toastify";
import axios from "../api/axios";

export const getUsers = async () => {
    try {
        const responseText = await axios.get(`/users/`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
};

export const getRoles = async () => {
    try {
        const responseText = await axios.get(`/roles/`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
}

export const updateUser = async (userID, userData) => {
    try {
        const responseText = await axios.put(`/user/${userID}`, userData)

        return responseText.data
    } catch(error) {
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);
    }
}

export const deleteUser = async (userID) => {
    try {
        const responseText = await axios.delete(`/user/${userID}`)

        return responseText.data
    } catch(error) {
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);
    }
}

export const addUser = async (userSource) => {
    try {
        const responseText = await axios.post(`/user/create`, userSource)

        return responseText.data
    } catch(error ){
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);
    }
}

export const addNewRole = async (roleData) => {
    try {
        const responseText = await axios.post(`/role/create/`, roleData)

        return responseText.data
    } catch(error) {
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);
    }
}


export const updateRole = async (roleID, roleData) => {
    try {
        const responseText = await axios.put(`/role/update/${roleID}`, roleData)

        return responseText.data
    } catch(error) {
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);
    }
}

export const deleteRole = async (roleID) => {
    try {
        const responseText = await axios.delete(`/role/delete/${roleID}`)
        return responseText.data
    } catch(error) {
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);
    }
}
