import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {orderService} from "../../services";

const initialState = {
    orders: [],
    loading: false,
    totalCount: null,
    error: null,
};

const getOrdersByFilter = createAsyncThunk("orders/getOrdersByFilter", async (params, {rejectWithValue}) => {
    try {
        const {data} = await orderService.getOrdersByFilter(params);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const patchOrder = createAsyncThunk("orders/patchOrder", async (params, {rejectWithValue}) => {
    try {
        const {data} = await orderService.patchOrder(params.id, params.data);
        return data;

    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const addOrderComment = createAsyncThunk("orders/addOrderComment", async (params, {rejectWithValue}) => {
    try {
        const {data} = await orderService.addOrderComment(params.id, params.data);
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
            })

            .addCase(patchOrder.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.orders.findIndex((order) => order.id === action.payload.id);
                state.orders[index] = {
                    ...action.payload

                }

            })
            .addCase(patchOrder.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;

            })
            .addCase(patchOrder.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(addOrderComment.fulfilled, (state, action) => {
                const order = state.orders.find((order) => order.id === action.payload.order_id);
                order.comments.unshift(action.payload)
            })
            .addCase(addOrderComment.rejected, (state, action) => {
                state.error = action.payload;
            })



});

const {reducer: ordersReducer} = ordersSlice;

const ordersActions = {
    getOrdersByFilter,
    patchOrder,
    addOrderComment
};

export {ordersReducer, ordersActions};
