import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {adminProfileReducer, authReducer, groupsReducer, ordersReducer, usersReducer} from "./slices";


const rootReducer = combineReducers({
    ordersReducer,
    adminProfileReducer,
    groupsReducer,
    usersReducer,
    authReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

export {setupStore};
