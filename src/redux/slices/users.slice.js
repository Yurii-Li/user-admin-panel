import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";


const initialState = {
    users: [],
    count: 0,
    next : null,
    previous: null,
    loading: false,
    error: null,
}

const getUsers = createAsyncThunk("users/getUsers", async (_, {rejectWithValue}) => {
    try {
        const {data} = await usersService.getUsers();
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});


const usersSlice = createSlice({
name: "users",
initialState,
extraReducers: (builder) =>
    builder
        .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload.results;
            state.count = action.payload.count;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            state.loading = false;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(getUsers.pending, (state, action) => {
            state.loading = true;
        }),
});


const { reducer: usersReducer } = usersSlice;

const usersActions = {
    getUsers,
};

export { usersReducer, usersActions };
