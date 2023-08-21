/* ===================================================
    Date: 2023-08-02
    Desc: Classic Input Component
    Author: 🟣 Enoc Lima
=====================================================*/


import React, { useEffect, useState } from "react";
import style from "./classicInput.module.css";
import { BiErrorCircle } from 'react-icons/bi';

type InputProps = {
    type: string;
    name: string;
    label: string;
    errorMessage?: string;
    validator: (value: string) => boolean;
    setFormData: (value: any) => void;
    serverValidate?: {values: {[key: string]: boolean}, setValues: (value: any) => void};
}

type MyState = {
    [key: string]: string;
}

type MyValidate = {
    error: boolean | null;
    pending: boolean;
    server?: boolean;
}

function ClassicInput ({ type, name, label, errorMessage, validator, setFormData, serverValidate }: InputProps) : React.ReactNode {
    const [inputValue, setInputValue] = useState<MyState>({[name]: ""});
    const [validate, setValidate] = useState<MyValidate>({error: null, pending: true, server: false});
    
    const handleChange = (event: any) => {
        setInputValue({[name]: event.target.value});
        setValidate({ ...validate, pending: false, server: false, });
        serverValidate?.setValues({error: false, warn: false, pending: true});
    }

    const handleBlur = (e: any) => {
        const value = e.target.value.trim().replace(/\s{2,}/g, ' ');
        setInputValue({[name]: value});
    }

    useEffect(() => {
        !validate.pending && setValidate(prev => ({...prev, error: !validator(inputValue[name])}));
        validate.error === false && setFormData((prev:any) => ({...prev, ...inputValue}));
        validate.error === true && setFormData((prev: any) => ({...prev, [name]: ""}));
    }, [inputValue[name], validate.error]);

    return (
        <div className={style.classicInput__container}>
            <input className={`${style.classicInput} ${serverValidate?.values.error ? style.inputError : serverValidate?.values.warn ? style.inputWarn : ''}`} 
                type={type}
                name={name}
                placeholder={label}
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
                aria-label={label}
                value={inputValue[name]}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <span className={style.error}>
                {validate.error && <><BiErrorCircle fontSize={16}/> {errorMessage}</> }
            </span>
        </div>
    )
}

export default ClassicInput;