/* ===================================================
    Date: 2023-08-02
    Desc: User API handler with Redux Toolkit Query
    Author: 🟣 Enoc Lima
=====================================================*/


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


interface ServerResponse {
    isAutnenticated: boolean;
    user: any;
}

export const userApi = createApi({
    reducerPath: "currentUserApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getUser: builder.query<ServerResponse, string>({
            query: (url) => url,
        }),
    }),
});

export const { useGetUserQuery } = userApi;
export const selectUser = (state: RootState) => state.currentUserApi;

//export default userApi.reducer;