import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/productService";
import { toast } from "react-toastify";

const initialState = {
    product: null,
    products: {},
    productsByCategory: {},
    isError: false,
    isSuccess: false,
    isLoading: true,
    message: ""
}

export const createProduct = createAsyncThunk(
    "products/create",
    async (formData, thunkAPI) => {
        try {
            let responseText = await productService.createProduct(formData)
            if (responseText?.success) {
                responseText = responseText.products
            }
            return responseText
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)


export const getAllProducts = createAsyncThunk(
    "products/getAll",
    async (_, thunkAPI) => {
        try {
            let responseText = await productService.getProducts()
            
            if (responseText?.success) {
                responseText = responseText.products
            }
            return responseText
            
        } catch(error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const getProductsByCategory = createAsyncThunk(
    "products/getByCategory",
    async (id, thunkAPI) => {
        try {
            let responseText = await productService.getProductsByCategory(id)
            if (responseText?.success) {
                responseText = responseText.products
            }
            return responseText
        } catch(error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)

export const getProductByID = createAsyncThunk(
    "products/getByID",
    async (id, thunkAPI) => {
        try {
            let responseText = await productService.getProductByID(id)
            if (responseText?.success) {
                responseText = responseText.product
            }
            return responseText
        } catch(error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        SET_PRODUCTS(state, action) {
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.products.push(action.payload)
                toast.success("Product has been added successfully")
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })   
            .addCase(getProductsByCategory.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.productsByCategory = action.payload
            })
            .addCase(getProductsByCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })   
            .addCase(getProductByID.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
            })
            .addCase(getProductByID.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.product = action.payload
            })
            .addCase(getProductByID.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })                                      
    }
});

export default productSlice.reducer;