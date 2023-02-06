import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { orderService } from "../../services";

const initialState = {
    orders: [],
    loading: false,
    totalCount: null,
    error: null,
};

const getOrdersByFilter = createAsyncThunk("orders/getOrdersByFilter", async (params, { rejectWithValue }) => {
    try {
        const { data } = await orderService.getOrdersByFilter(params);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const ordersSlice = createSlice({
    name: "ordersSlice",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getOrdersByFilter.fulfilled, (state, action) => {
                state.orders = action.payload.results;
                state.totalCount = action.payload.count;
                state.loading = false;
            })
            .addCase(getOrdersByFilter.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(getOrdersByFilter.pending, (state, action) => {
                state.loading = true;
            }),
});

const { reducer: ordersReducer } = ordersSlice;

const ordersActions = {
    getOrdersByFilter,
};

export {ordersReducer, ordersActions};
