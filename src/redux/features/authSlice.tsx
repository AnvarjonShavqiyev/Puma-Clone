import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";


const createUser = createAsyncThunk("auth/createUser", async(data:User) => {
    try {
        const response: AxiosResponse = await axios.post("/auth/register", data);
        return response.data.payload;
    }catch(error: any){
        if(error.response.status === 409){
            window.location.href = window.location.origin + '/sign-in';
        }
    }
})

interface initialAuthType {
    token: string;
    _id:number | null
    user:User | null
}

const initialState:initialAuthType = {
    token:(sessionStorage.getItem("token") as string) || "",
    _id:null,
    user:null   
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:(state) => {
            state._id = null,
            state.user = null,
            state.token = ""
            sessionStorage.removeItem("token");
            window.location.href = window.location.origin + '/sign-in';
        }
    },
    extraReducers:(builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            if(action.payload?.token){
                sessionStorage.setItem("token", action.payload.token);
                state.token = action.payload.token;
                state._id = action.payload.user._id;
            }
            window.location.href = window.location.origin + '/'
        })
    }

});
export const { logOut } = authSlice.actions;
export { createUser };
export default authSlice.reducer;