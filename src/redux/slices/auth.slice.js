import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService, history} from "../../services";

const initialState = {
    loading: false,
    error: null,
}


const login = createAsyncThunk("auth/login", async (user, {rejectWithValue}) => {
    try {
        const {data} = await authService.login(user);

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});


const authSlice = createSlice({
    name: "authSlice",
    initialState,
    extraReducers: (builder) =>
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            authService.setTokens(action.payload);
            history.replace("/orders");
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(login.pending, (state, action) => {
            state.loading = true;
        })

})

const {reducer: authReducer} = authSlice;

const authActions = {
    login
};

export {authReducer, authActions};
