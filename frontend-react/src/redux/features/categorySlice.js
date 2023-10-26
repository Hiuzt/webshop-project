import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../../services/categoryService";
import { toast } from "react-toastify";

const initialState = {
    category: null,
    categories: {},
    isError: false,
    isSuccess: false,
    isLoading: true,
    message: ""
}

export const createCategory = createAsyncThunk(
    "category/create",
    async (data, thunkAPI) => {
        try {
            let responseText = await categoryService.createCategory(data)
            if (responseText.success) {
                responseText = responseText.category
            }
            return responseText
        } catch (error) {
            toast.error(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getCategories = createAsyncThunk(
    "category/getAll",
    async (_, thunkAPI) => {
        try {
            let responseText = await categoryService.getAllCategory()
            if (responseText.success) {
                responseText = responseText.categories
            }
            return responseText
        } catch (error) {
            toast.error(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const deleteCategory = createAsyncThunk(
    "category/delete",
    async (data, thunkAPI) => {
        try {
            let responseText = await categoryService.deleteCategory(data)
            if (responseText.success) {
                responseText = responseText.categories
            }
            return responseText
        } catch (error) {
            toast.error(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateCategory = createAsyncThunk(
    "category/update",
    async ({id, data}, thunkAPI) => {
        try {
            let responseText = await categoryService.updateCategory(data, id)
            if (responseText?.success) {
                responseText = responseText.categories
            }
            return responseText
        } catch (error) {
            toast.error(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            //CATEGORY-CREATE
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.categories.push(action.payload)
                toast.success("Category added successfully")
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })

            // GET CATEGORIES
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })
            // DELETE
            .addCase(deleteCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.categories.push(action.payload)
                toast.success("Category deleted successfully")
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload

                toast.error(action.payload)
            })
            // UPDATE
            .addCase(updateCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                
                toast.success("Category updated successfully")
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.isSuccess = false
                state.message = action.payload

                toast.error(action.payload)
            })
    }
})


export const getCategoriesRedux = (state) => state.categories.categories
export const isLoadedCategories = (state) => state.categories.isLoaded


export default categorySlice.reducer