/* ===================================================
    Date: 2023-08-02
    Desc: Typed custom hooks
    Author: 🟣 Enoc Lima
=====================================================*/


import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;