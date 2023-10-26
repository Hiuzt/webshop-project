import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: true,
    userSource: {
        createdAt: "",
        email: "",
        firstName: "",
        lastName: "",
        role: "",
        username: "",
        _id: "",
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload;
        },

        SET_USER(state, action) {
            state.userSource = action.payload;
        }
    }
})

export const {SET_LOGIN, SET_USER} = authSlice.actions;
export const getCurrentUser = (state) => state.auth.userSource;
export const getLoginStatus = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;