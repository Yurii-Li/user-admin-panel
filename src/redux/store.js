import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {adminProfileReducer, groupsReducer, ordersReducer} from "./slices";


const rootReducer = combineReducers({
    ordersReducer,
    adminProfileReducer,
    groupsReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

export {setupStore};
