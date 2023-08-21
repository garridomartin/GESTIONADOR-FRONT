/* ===================================================
    Date: 2023-08-10 07:39:06
    Desc: Primary Button Component
    Author: 🟣 Enok Lima
=====================================================*/


import React from "react";
import style from "./primaryButton.module.css";

type ButtonProps = {
    text: string;
    value?: string | any;
    disabled?: boolean;
    onclick?: () => void;
    Icon?: any;
    type?: "button" | "submit" | "reset" | undefined;
    extraClassName?: string;
}

const PrimaryButton:React.FC<ButtonProps> = ({text="Enviar", value=null, onclick, Icon, disabled, type, extraClassName }) => {
  return (
    <button  className={style.primary + ` ${extraClassName && style[extraClassName]}`}
        onClick={onclick}
        value={value && value}
        disabled={disabled && disabled}
        type={type && type}
    >
        <Icon fontSize={24}/>
        {text}
    </button>
  )
}
export default PrimaryButton;