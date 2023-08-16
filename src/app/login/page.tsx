/* ===================================================
    Date: 2023-08-02
    Desc: Login Page
    Author: 🟣 Enoc Lima
=====================================================*/


'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import style from './login.module.css';
import ClassicInput from '@/components/form/inputs';
import PrimaryButton from '@/components/buttons/primaryButton';
import { BiLogInCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import formatValidate from '@/assets/js/format_validates';


function Login() {
    const [formData, setFormData] = useState({email: "", password: ""})
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    useEffect(() => {
        formData.email && formData.password ? setButtonDisabled(false) : setButtonDisabled(true);
    },[formData])

    return (
        <div className={style.container}>
            <div className={style.login}>
                <div className={style.login__header}>
                    <h1 className='title'>Iniciar sesión</h1>
                </div>
                <div className={style.login__body}>
                    <form className={style.login__form}
                        onSubmit={handleSubmit}
                        >
                        <ClassicInput type="email"
                            name="email" 
                            label="Ingrese su correo electrónico"
                            errorMessage='Correo electrónico inválido'
                            validator={formatValidate('any', 'email')}
                            setFormData={setFormData} />
                        <ClassicInput type="password" 
                            name="password" 
                            label="Contraseña"
                            validator={formatValidate('any', 'minmax8_36')}
                            setFormData={setFormData}
                            errorMessage='Contraseña inválida'
                            />

                        <span className={style.forgot__container}>
                        <Link className='link' href="/forgot-password">
                            ¿Olvidaste tu contraseña?
                        </Link>
                        </span>

                        <PrimaryButton text="Iniciar sesión" Icon={BiLogInCircle} disabled={buttonDisabled} />
                    </form>

                    <div className={style.login__footer}>
                        <p className={style.text}>
                            ¿No tienes una cuenta?  <Link className='link'
                                href="/register">
                                Registrate
                            </Link>
                        </p>
                        <div>
                            <Link className={style.googleLogin}  href="/google-login">
                                <span className={style.text}>
                                    Iniciar sesión con Google
                                </span>
                                <FcGoogle fontSize={30} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login;