/* ===================================================
    Date: 2023-08-02
    Desc: App Slice with Redux Toolkit TODO: Experiment 
    Author: 🟣 Enoc Lima
=====================================================*/


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


type StateValue = {
    loading: boolean,
    defaults: any,
    responseData: any,
    redirect: string,
    messages: {
        success: string,
        error: string,
        warn: string,
        info: string
    }
}

const initialState: StateValue = {
    loading: false,
    defaults: {},
    responseData: {},
    redirect: '',
    messages: {
        success: '',
        error: '',
        warn: '',
        info: ''
    }
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setDefaults: (state, action) => {
            state.defaults = action.payload;
        },
        setResponse: (state, action: PayloadAction<unknown>) => {
            state.responseData = action.payload;
        },
        setNextUrl: (state, action: PayloadAction<string>) => {
            state.redirect = action.payload;
        },
        setMessages: (state, action: PayloadAction<any>) => {
            const { success, error, warn, info } = action.payload;
            state.messages.success = success? success: '';
            state.messages.error = error? error: '';
            state.messages.warn = warn? warn: '';
            state.messages.info = info? info: '';
        }
    }
});

export const { setLoading, setDefaults, setResponse, setNextUrl, setMessages } = navigationSlice.actions;
export const selectNavigation = (state: RootState) => state.navigationReducer;
export default navigationSlice.reducer;