import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";


const cookies = new Cookies();


//Authentication Slice Part
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,             //Null or User Object
        authStatus: 'unauthenticated', // authenticated | loading | faild | unauthenticated | signup | signin
        authError: null,               //Null or error message
    },

    reducers: {

        loadUser: (state) => {
            const user = cookies.get("user")
            state.currentUser = user ? user : null;
            state.authStatus = user ? "authenticated" : "unauthenticated";
            state.authError = null;
          },

        // This is a reducer, that set current based on the result during the initial app
        setCurrentUser: (state, action) => {
            const user = action.payload;
            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            cookies.set("user", JSON.stringify(user), { path: "/", expires });
            state.currentUser = user ? user: null;
            state.authStatus = user ? "authenticated": "unauthenticated";
            state.authError = null
        },

        // This is a reducer, that remove current user
        signout: (state) => {
            state.currentUser = null;
            state.authStatus = 'unauthenticated';
            state.authError = null;
            cookies.remove("user", { path: "/" });
        },
        
        // This is a reducer, that sets the auth status to loading
        setAuthLoading: (state, action) => {
          state.authStatus = action.payload;
          state.authError = null;
          state.currentUser = 'unauthenticated';
        },
        
        // This is a reducer, that sets the auth status to failed
        setAuthFailed: (state, action) => {
          state.authStatus = 'failed';
          state.authError = action.payload;
        },

        resetAuthFaild: (state) => {
            state.authStatus = 'unauthenticated';
            state.authError = null;
        }
    },
})

export const {setCurrentUser,  signout, setAuthFailed, setAuthLoading, loadUser, resetAuthFaild} = authSlice.actions;
export default authSlice.reducer;
