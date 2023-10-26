import { toast } from "react-toastify";
import axios from "../api/axios";

const createReview = async (productID, reviewData) => {
    try {       
        const response = await axios.put(`/review/create/${productID}`, reviewData);
        return response.data;
    } catch (error) {
        const errorText = error.response?.data?.error;
        toast.error(errorText);
    }
}

const getReviews = async (productID) => {
    try {
        const responseText = await axios.get(`/reviews/${productID}`);
        return responseText.data;
    } catch (error) {
        const errorMessage =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        toast.error(errorMessage);
    }
};

const reviewService = {
    createReview,
    getReviews,
}

export default reviewService;