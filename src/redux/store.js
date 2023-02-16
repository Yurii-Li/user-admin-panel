import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {adminProfileReducer, groupsReducer, ordersReducer,usersReducer} from "./slices";


const rootReducer = combineReducers({
    ordersReducer,
    adminProfileReducer,
    groupsReducer,
    usersReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

export {setupStore};
