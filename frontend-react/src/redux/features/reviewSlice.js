import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviewService from "../../services/reviewService";
import { toast } from "react-toastify";



export const getReviews = createAsyncThunk(
    "reviews/get",
    async (id, thunkAPI) => {
        try {        
            const responseText = await reviewService.getReviews(id)           
            return responseText.reviews
        } catch(error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const createReview = createAsyncThunk(
    "reviews/create",
    async ({id, formData}, thunkAPI) => {
        try {
            const responseText = await reviewService.createReview(id, formData)
            
            return responseText.product.reviews
        } catch(error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)


const initialState = {
    reviews: {},
    ratingSum: 0,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        SET_REVIEWS(state, action) {
            state.reviews = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createReview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createReview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError =  false

                state.reviews = action.payload
                toast.success("You have successfully created a review")
            })
            .addCase(createReview.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError =  true             
            }) 
            .addCase(getReviews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError =  false
                state.reviews = action.payload
            })
            .addCase(getReviews.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError =  true             
            })                  
    }
})





export default reviewSlice.reducer;