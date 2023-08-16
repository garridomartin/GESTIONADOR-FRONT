/* ===================================================
    Date: 2023-08-05 06:24:21
    Desc: Dashboard page
    Author: 🟣 Enok Lima
=====================================================*/


'use client'
import style from './dashboard.module.css';
import { useStyle } from '@/context/react/styleContext';

import { useGetDefaultsQuery } from "@/context/redux/api_handler/navigationApi";

function Dasboard(): JSX.Element {
    const { screen } = useStyle();
    const data: any = useGetDefaultsQuery("character/84");
    return (
        <div className={style.container}>
            {}
        </div>
    )
}

export default Dasboard;