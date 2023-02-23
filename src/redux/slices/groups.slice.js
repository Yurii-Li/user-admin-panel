import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {groupsService} from "../../services";
import {patchOrder} from "./orders.slice";

const initialState = {
    groups: [],
    count: 0,
    previous: null,
    next: null,
    loading: false,
    error: null,
}

const getGroups = createAsyncThunk(
    "groups/getGroups",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await groupsService.getGroups();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const createGroup = createAsyncThunk( "groups/createGroup", async ( group, {rejectWithValue}) => {
    try {
        const {data} = await groupsService.createGroup({name: group});


        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});


const groupsSlice = createSlice({
    name: "groupsSlice",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getGroups.fulfilled, (state, action) => {
                state.groups = action.payload.results;
                state.count = action.payload.count;
                state.previous = action.payload.previous;
                state.next = action.payload.next;
                state.loading = false;
            })
            .addCase(getGroups.rejected, (state, action) => {
                state.error = action.payload;

            })
            .addCase(getGroups.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(createGroup.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.groups.push(action.payload);
                state.loading = false;
            })
            .addCase(createGroup.rejected, (state, action) => {
                state.error = action.payload;
            })



});


const {reducer: groupsReducer} = groupsSlice;

const groupsActions = {
    getGroups,
    createGroup,
}

export {groupsReducer, groupsActions};
