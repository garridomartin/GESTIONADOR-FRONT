/* ===================================================
    Date: 2023-08-02
    Desc: Navigation API handler with Redux Toolkit Query
    Author: 🟣 Enoc Lima
=====================================================*/


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface DataPayload {
    url: string,
    body: any
}

export const navigationApi = createApi({
    reducerPath: "responseApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getDefaults: builder.query<any, string>({
            query: (url) => url,
        }),
        getNavigation: builder.query<any, string>({
            query: (url) => url,
        }),
        postNavigation: builder.mutation<any, DataPayload>({
            query: (args) => ({
                url: args.url,
                method: "POST",
                body: args.body
            }),
        }),
    }),
});


export const { useGetDefaultsQuery, useGetNavigationQuery, usePostNavigationMutation } = navigationApi;

export const selectNavigation = (state: RootState) => state.responseApi;