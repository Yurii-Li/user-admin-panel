import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {history, usersService} from "../../services";


const initialState = {
    users: [],
    userStatistic: {},
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

const createUser = createAsyncThunk("users/createUser", async (user, {rejectWithValue}) => {
    try {
        const {data} = await usersService.createUser(user);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const activateUser = createAsyncThunk("users/activateUser", async ({token, password}, {rejectWithValue}) => {
try {
        const {data} = await usersService.activateUser(token, password);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});


const banUser = createAsyncThunk("users/banUser", async (id, {rejectWithValue}) => {
    try {
        const {data} = await usersService.banUser(id);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const unbanUser = createAsyncThunk("users/unbanUser", async (id, {rejectWithValue}) => {
    try {
        const {data} = await usersService.unbanUser(id);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const userStatistic = createAsyncThunk("users/userStatistic", async (id, {rejectWithValue, getState}) => {
    try {

        const state = getState();
        if (state.usersReducer.userStatistic[id]) {
            return;
        }

        const {data} = await usersService.userStatistic(id);
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
        })

        .addCase(createUser.fulfilled, (state, action) => {
            state.users = [action.payload, ...state.users]
        })
        .addCase(createUser.rejected, (state, action) => {
            state.error = action.payload;
        })

        .addCase(activateUser.fulfilled, (state, action) => {
            history.replace("/login");
        })
        .addCase(activateUser.rejected, (state, action) => {
            state.error = action.payload;
        })

        .addCase(banUser.fulfilled, (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            state.users[index] = action.payload;
        })
        .addCase(banUser.rejected, (state, action) => {
            state.error = action.payload;
        })

        .addCase(unbanUser.fulfilled, (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            state.users[index] = action.payload;
        })
        .addCase(unbanUser.rejected, (state, action) => {
            state.error = action.payload;
        })

        .addCase(userStatistic.fulfilled, (state, action) => {
            state.userStatistic[action.meta.arg] = action.payload;
        })
        .addCase(userStatistic.rejected, (state, action) => {
            state.error = action.payload;
        })
});


const { reducer: usersReducer } = usersSlice;

const usersActions = {
    getUsers,
    createUser,
    activateUser,
    banUser,
    unbanUser,
    userStatistic,
};

export { usersReducer, usersActions };
