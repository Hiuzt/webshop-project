import { toast } from "react-toastify";
import axios from "../api/axios";

const getProducts = async () => {
    try {
        const responseText = await axios.get(`/products/`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
};

const getProductsByCategory = async (categoryID) => {
    try {
        const responseText = await axios.get(`/product/category/${categoryID}`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
};

const getProductByID = async (productID) => {
    try {
        const responseText = await axios.get(`/product/${productID}`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
};

const createProduct = async(formData) => {
    try {
        const responseText = await axios.post(`/product/create`, formData)
        return responseText.data;
    } catch(error) {
        const errorMessage =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        toast.error(errorMessage);       
    }
}

const productService = {
    getProducts,
    getProductByID,
    createProduct,
    getProductsByCategory
}

export default productService;