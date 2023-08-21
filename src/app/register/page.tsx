/* ===================================================
    Date: 2023-08-05 06:40:29
    Desc: Register Page
    Author: 🟣 Enok Lima
=====================================================*/


'use client';
import Link from 'next/link';
import style from './register.module.css';
import PrimaryButton from '@/components/buttons/primaryButton';
import ClassicInput from '@/components/form/inputs';
import { BiAddToQueue } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc'


function Register () {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.register}>
                    <div className={style.register__header}>
                        <h1 className='title'>Registrate</h1>
                    </div>
                    <div className={style.register__body}>
                        <form className={style.register__form}
                            onSubmit={handleSubmit}
                        >
                            <ClassicInput type="email" name="email" label="Correo Electrónico" />
                            <br/>
                            <ClassicInput type="password" name="password" label="Contraseña" />
                            <ClassicInput type="password" name="confir_password" label="Confirmar Contraseña" />

                            <PrimaryButton text="Registrate" Icon={BiAddToQueue} />
                        </form>
                        
                        <div className={style.register__footer}>
                            <p className={style.text}>
                                ¿Ya tienes cuenta? <Link className='link'
                                    href="/login">
                                    Iniciar sesión
                                </Link>
                            </p>
                            <div>
                                <Link className={style.googleRegister}  href="/google-login">
                                    <span className={style.text}>
                                        Registrate con tu cuenta de Google
                                    </span>
                                    <FcGoogle fontSize={30} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;