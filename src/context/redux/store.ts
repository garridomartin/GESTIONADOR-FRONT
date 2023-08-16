/* ===================================================
    Date: 2023-08-02
    Desc: Redux store
    Author: 🟣 Enoc Lima
=====================================================*/


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import navigationReducer from "./features/appSlice";

import {userApi} from "./api_handler/userApi";
import {navigationApi} from "./api_handler/navigationApi";


export const store = configureStore({
    reducer: {
        userReducer,            // This is the reducer created by createSlice()
        navigationReducer,      // This is the reducer created by createSlice()
        [userApi.reducerPath]: userApi.reducer, // This is the reducer created by createApi()
        [navigationApi.reducerPath]: navigationApi.reducer, // This is the reducer created by createApi()
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(navigationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;