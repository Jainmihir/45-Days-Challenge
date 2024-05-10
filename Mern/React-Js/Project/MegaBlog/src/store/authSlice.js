import { createSlice } from "@reduxjs/toolkit";

const InitialState ={
    status : false,
    userData: null,
}

const authSlice = createSlice({
    name : "auth",
    InitialState,
    reducers : {
        login : (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state,action) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login,logout} = authSlice.actions
export default authSlice.reducer;
