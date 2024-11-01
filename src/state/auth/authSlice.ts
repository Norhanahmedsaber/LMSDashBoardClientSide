import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    isloggedin:boolean
}

const initialState : AuthState={
    isloggedin : false
}

const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state)=>{
            state.isloggedin=true
        },
        logout:(state)=>{
            state.isloggedin=false
        },
    }
})
export const {login,logout}=authSlice.actions 
export default authSlice.reducer