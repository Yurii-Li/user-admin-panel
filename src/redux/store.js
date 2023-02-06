import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {adminProfileReducer, ordersReducer} from "./slices";


const rootReducer = combineReducers({
    ordersReducer,
    adminProfileReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

export {setupStore};
