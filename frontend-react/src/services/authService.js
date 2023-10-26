import { toast } from "react-toastify";
import axios from "../api/axios";
import { createDispatchHook, useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../redux/features/authSlice";
import { store } from "../redux/store";

export const getLoginStatus = async () => {
    try {
        const responseText = await axios.get(`auth/loggedin/`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
};

export const logoutUser = async () => {
    try {       
        const response = await axios.get("/auth/logout");
        return response.data;
    } catch (error) {
        const errorText = error.response?.data?.error;
        toast.error(errorText);
    }
}

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post("/auth/login", loginData);

        return response;
    } catch (error) {
        const errorText = error.response.data?.error;

        toast.error(errorText);
    }
};
