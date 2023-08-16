/* ===================================================
    Date: 2023-08-02
    Desc: User Slice with Redux Toolkit TODO: Experiment
    Author: 🟣 Enoc Lima
=====================================================*/


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


type StateValue = {
    current_user: {
        isAuthenticated: boolean,
        user: any
    }
}

const initialState: StateValue = {
    current_user: {
        isAuthenticated: false,
        user: {}
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.current_user.isAuthenticated = action.payload;
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.current_user.user = action.payload;
        }
    }
});

export const { setAuthenticated, setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.userReducer.current_user;

export default userSlice.reducer;