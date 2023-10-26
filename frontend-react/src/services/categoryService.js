import { toast } from "react-toastify";
import axios from "../api/axios";

const getAllCategory = async () => {
    try {       
        const response = await axios.get("/category/getAll");
        return response.data;
    } catch (error) {
        const errorText = error.response?.data?.error;
        toast.error(errorText);
    }
}

const deleteCategory = async (categoryID) => {
    try {       
        const response = await axios.delete(`/category/delete/${categoryID}`);
        return response.data;
    } catch (error) {
        const errorText = error.response?.data?.error;
        toast.error(errorText);
    }
} 

const createCategory = async (categoryData) => {
    try {       
        const response = await axios.post(`/category/create/`, categoryData);
        return response.data;
    } catch (error) {
        const errorText = error.response?.data?.error;
        toast.error(errorText);
    }
}

const updateCategory = async (categoryData, categoryID) => {
    try {       
        const response = await axios.put(`/category/update/${categoryID}`, categoryData);
        return response.data;
    } catch (error) {
        const errorText = error.response?.data?.error;
        toast.error(errorText);
    }
}


const categoryService = {
    getAllCategory,
    deleteCategory,
    createCategory,
    updateCategory
}

export default categoryService;