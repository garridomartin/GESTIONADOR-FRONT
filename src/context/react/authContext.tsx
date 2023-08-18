/* ===================================================
    Date: 2023-08-02
    Desc: Auth Context Provider, Custom Hook
    Author: 🟣 Enoc Lima
=====================================================*/


"use client";
import React, { createContext, useEffect, ReactNode } from "react";
import { useGetUserQuery } from "@/context/redux/api_handler/userApi";
import { useAppDispatch } from "../redux/typedHoocks";
import { setCurrentUser } from "../redux/features/userSlice";

/********* typeScriptsTypes ***********/
type AuthContextValue = {
}

type AuthProviderProps = {
    children: ReactNode;
}
/********* end typeScriptsTypes ***********/

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { data }: {[key: string]: any} = useGetUserQuery('currentUser');

    useEffect(() => {
        data && dispatch(setCurrentUser(data));
    }, [data])

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;