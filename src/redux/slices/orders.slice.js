import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { orderService } from "../../services";

const initialState = {
    orders: [],
    ordersStatistic: null,
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

const patchOrder = createAsyncThunk("orders/patchOrder", async (params, { rejectWithValue, getState }) => {
    try {
        const { data } = await orderService.patchOrder(params.id, params.data);

        const { groups } = getState().groupsReducer;
        const { profile } = getState().adminProfileReducer.adminProfile;

        const group = groups.find((group) => group.id === data.group);

        return {
            ...data,
            group,
            manager: profile,
        };
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const addOrderComment = createAsyncThunk("orders/addOrderComment", async (params, { rejectWithValue }) => {
    try {
        const { data } = await orderService.addOrderComment(params.id, params.data);
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
});

const getOrdersStatistic = createAsyncThunk("orders/getOrdersStatistic", async (_, { rejectWithValue }) => {
    try {
        const { data } = await orderService.ordersStatistic();
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
                state.orders = state.orders.map(order => order.id === action.payload.id ? action.payload : order);
            })
            .addCase(patchOrder.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(patchOrder.pending, (state, action) => {
                state.loading = true;
            })

            .addCase(addOrderComment.fulfilled, (state, action) => {
                state.orders = state.orders.map((order) => {
                    if (order.id === action.payload.order_id) {
                        return {
                            ...order,
                            comments: [ action.payload, ...order.comments ],
                            status: "В работе",
                            manager: action.payload.manager
                        };
                    }
                    return order;
                });
            })

            .addCase(addOrderComment.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(getOrdersStatistic.fulfilled, (state, action) => {
                state.ordersStatistic = action.payload;
            })
            .addCase(getOrdersStatistic.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(getOrdersStatistic.pending, (state, action) => {
                state.loading = true;
            }),
});

const { reducer: ordersReducer } = ordersSlice;

const ordersActions = {
    getOrdersByFilter,
    patchOrder,
    addOrderComment,
    getOrdersStatistic,
};

export { ordersReducer, ordersActions };
