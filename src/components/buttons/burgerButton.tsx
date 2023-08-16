/* ===================================================
    Date: 2023-08-09 21:51:44
    Desc: BurgerButton component
    Author: 🟣 Enok Lima
=====================================================*/


import React from 'react';
import style from './burgerButton.module.css';

type PropType = {
    onclick: (e: any) => void;
    Icon: any;
    classname?: string;
}

export const BurgerButton:React.FC<PropType> = ({Icon, onclick, classname}) => {

    return (
        <button className={`${classname} ${style.burger}`} onClick={onclick} >
            <Icon fontSize={24} />
        </button>
    )
}