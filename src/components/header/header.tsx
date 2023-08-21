/*====================================================
    Date: 2023-08-09 17:55:41
    Desc: Header Component
    Author: 🟣 Enok Lima
=====================================================*/


'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './header.module.css';
import { useStyle } from '@/context/react/styleContext';
import { useAuth } from '@/context/react/authContext';
import { BurgerButton } from '../buttons/burgerButton';
import { BiMenu, BiX, BiSpreadsheet, BiLogOutCircle, BiHelpCircle, BiCog } from 'react-icons/bi';
import { useLazyGetNavigationQuery } from '@/context/redux/api_handler/navigationApi';
import { useAppDispatch, useAppSelector } from '@/context/redux/typedHoocks';
import { setCurrentUser, selectUser } from "@/context/redux/features/userSlice";
import { ClientOnly } from '../clientOnly';


function Header(): React.ReactElement {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const { status } = useAuth();    
    const { isAuthenticated } = useAppSelector(selectUser);
    const {sidebarOpen, setSidebarOpen, screen} = useStyle();
    const router = useRouter();

    const [trigger, {data}] = useLazyGetNavigationQuery();

    const dispatch = useAppDispatch();

    useEffect(() => {       //------ Set user data on logout ------//
        data && dispatch(setCurrentUser(data));
    }, [data])

    useEffect(() => {
        !isAuthenticated && status === 'fulfilled' && router.push('/');
    },[isAuthenticated])

    useEffect(() => {       //------ Event show hidden options ------//
        const handleEsc = (event: any) => {
            showOptions && !event.target.closest('.userButton') && setShowOptions(false);
        }
        showOptions && window.addEventListener('click', handleEsc);
        return () => window.removeEventListener('click', handleEsc);
    },[showOptions])

    useEffect(() => {
        const handleEsc = (event: any) => {
            screen <= 420 && sidebarOpen && !event.target.closest('.openButton') && setSidebarOpen(false);
        }
        screen <= 420 && sidebarOpen && window.addEventListener('click', handleEsc);
        return () => window.removeEventListener('click', handleEsc);
    },[sidebarOpen])
    
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div>
                    <ClientOnly>
                        {screen <= 420 && 
                            <BurgerButton classname='openButton'
                                Icon={!sidebarOpen? BiMenu: BiX} 
                                onclick={(e:any) => {
                                    e.stopPropagation();
                                    setSidebarOpen(!sidebarOpen);
                                }}/>
                        }
                    </ClientOnly>
                </div>
                <div>
                    <button className={style.userButton} onClick={(e) => {
                        e.stopPropagation();
                        setShowOptions(!showOptions);
                    }}>
                        <span className={style.text}>Fernando Tomacini</span>
                        <div className={style.userImage}>
                            <img className={style.image} 
                                src="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg" alt="User" />
                        </div>

                        {showOptions &&
                            <div className={style.options}>
                                <div className={style.option}>
                                    <BiSpreadsheet fontSize={20}/>
                                    <span className={style.text}>Perfil</span>
                                </div>
                                <div className={style.option}>
                                    <BiCog fontSize={20}/>
                                    <span className={style.text}>Configuración</span>
                                </div>
                                <div className={style.option}>
                                    <BiHelpCircle fontSize={20}/>
                                    <span className={style.text}>Ayuda</span>
                                </div>
                                <br />
                                <hr style={{borderColor: "var(--divider-color)"}}/>
                                <div className={style.option} onClick={() => trigger('logout')}>
                                    <BiLogOutCircle fontSize={20}/>
                                    <span className={style.text}>Cerrar sesión</span>
                                </div>
                            </div>
                        }

                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;