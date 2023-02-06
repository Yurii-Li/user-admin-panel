import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminProfileService } from "../../services";

const initialState = {
    adminProfile: null,
    loading: false,
    error: null,
};

const getAdminProfile = createAsyncThunk("adminProfile/getAdminProfile", async (_, { rejectWithValue }) => {
    try {
        const { data } = await adminProfileService.getAdminProfile();
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const adminProfileSlice = createSlice({
    name: "adminProfileSlice",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getAdminProfile.fulfilled, (state, action) => {
                state.adminProfile = action.payload;
                state.loading = false;
            })
            .addCase(getAdminProfile.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(getAdminProfile.pending, (state, action) => {
                state.loading = true;
            }),
});

const { reducer: adminProfileReducer } = adminProfileSlice;

const adminProfileActions = {
    getAdminProfile,
};

export { adminProfileReducer, adminProfileActions };
