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
        name?: string;
        username?: string;
        profilePict?: string | null;
        isAdmin?: boolean;
        isSeller?: boolean;
    }
}

const initialState: StateValue = {
    current_user: {
        isAuthenticated: false
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<StateValue['current_user']>) => {
            state.current_user = {...action.payload};
        }
    }
});

export const { setCurrentUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.userReducer.current_user;

export default userSlice.reducer;