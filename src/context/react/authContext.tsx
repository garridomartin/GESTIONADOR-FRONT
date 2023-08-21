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
    status: string;
}

type AuthProviderProps = {
    children: ReactNode;
}
/********* end typeScriptsTypes ***********/

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);
export const useAuth = () => React.useContext(AuthContext);


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { data, status }: {[key: string]: any} = useGetUserQuery('currentUser');

    useEffect(() => {
        data && dispatch(setCurrentUser(data));
    }, [data])

    return (
        <AuthContext.Provider value={{
            status
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;