import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {groupsService} from "../../services";

const initialState = {
    groups: [],
    count: 0,
    previousPageGroups: null,
    nextPageGroups: null,
    loadingGroups: false,
    error: null,
}

const getGroups = createAsyncThunk(
    "groups/getGroups",
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await groupsService.getGroups(page);
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
                state.groups = [...state.groups, ...action.payload.results]
                state.count = action.payload.count;
                state.previousPageGroups = action.payload.previous;
                state.nextPageGroups = action.payload.next;
                state.loadingGroups = false;
            })
            .addCase(getGroups.rejected, (state, action) => {
                state.error = action.payload;

            })
            .addCase(getGroups.pending, (state, action) => {
                state.loadingGroups = true;
            })

            .addCase(createGroup.fulfilled, (state, action) => {
                state.groups = [...state.groups, action.payload];
                state.loadingGroups = false;
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
