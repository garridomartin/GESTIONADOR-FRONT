/*====================================================
    Date: 2023-08-09 17:55:41
    Desc: Header Component
    Author: 🟣 Enok Lima
=====================================================*/


'use client';
import { useEffect } from 'react';
import style from './header.module.css';
import { BurgerButton } from '../buttons/burgerButton';
import { useStyle } from '@/context/react/styleContext';
import { BiMenu, BiX } from 'react-icons/bi';
import { ClientOnly } from '../clientOnly';


function Header(): React.ReactElement {
    const {sidebarOpen, setSidebarOpen, screen} = useStyle();

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
                    <button className={style.userButton}>
                        <span className={style.text}>Fernando Tomacini</span>
                        <div className={style.userImage}>
                            <img className={style.image} 
                                src="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg" alt="User" />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;