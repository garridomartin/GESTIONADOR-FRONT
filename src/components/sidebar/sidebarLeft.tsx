/* ===================================================
    Date: 2023-08-02
    Desc: Sidebar Left Component
    Author: 🟣 Enoc Lima
=====================================================*/


'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { ClientOnly } from '@/components/clientOnly';
import style from './sidebarLeft.module.css';
import { useStyle } from '@/context/react/styleContext';
import { BurgerButton } from '../buttons/burgerButton';
import { 
    BiSolidBookmarks, 
    BiSolidHomeAlt2, 
    BiSolidShoppingBagAlt, 
    BiSolidGroup, 
    BiSolidFace,
    BiSolidWidget,
    BiSolidExtension,
    BiSolidCog,

    BiMenu,
    BiX
} from 'react-icons/bi';


function SidebarLeft() : React.ReactNode {
    const [classname, setClassname] = useState<string>('displayNone');
    const { showBurger, setShowBurger, extendMenu, setExtendMenu, sidebarOpen } = useStyle();
    const { screen } = useStyle();
    const path = usePathname();
    const { username } = useParams();
    
    const items = [
        {icon: BiSolidHomeAlt2, text: 'dashboard', link: `/${username? username: 'anonymous'}/`},
        {icon: BiSolidWidget, text: 'Productos', link: `/${username? username: 'anonymous'}/products/`},
        {icon: BiSolidBookmarks, text: 'Facturación', link: `/${username? username: 'anonymous'}/envoicing/`},
        {icon: BiSolidShoppingBagAlt, text: 'Ventas', link: `/${username? username: 'anonymous'}/sales/`},
        {icon: BiSolidGroup, text: 'Clientes', link: `/${username? username: 'anonymous'}/clients/`},
        {icon: BiSolidFace, text: 'Users', link: `/${username? username: 'anonymous'}/users/`},
        {icon: BiSolidExtension, text: 'Integraciones', link: `/${username? username: 'anonymous'}/integrations/`}
    ]
    
    useEffect(() => {
        screen > 780 ? setShowBurger(false) : setShowBurger(true);
        screen < 780 && screen > 420? setExtendMenu(false) : setExtendMenu(true);
    }, [screen]);

    useEffect(() => {
        !extendMenu ? setClassname('displayNone') : setClassname('flex');
    }, [extendMenu]);

    useEffect(() => {
        const handleEsc = (e:any) => {
            (screen < 780 && screen > 420) && extendMenu && !e.target.closest('.navExtender') && setExtendMenu(false);
        }
        screen < 780 && screen > 420 && extendMenu && window.addEventListener('click', handleEsc);
        return () => window.removeEventListener('click', handleEsc);
    }, [extendMenu]);

    return <>
        {((screen >= 420 || sidebarOpen) && sidebarOpen) && 
            <ClientOnly>
                <div className={`${style.container} ${screen <= 780 && extendMenu? 'positionAbsolute' : ''}`}>
                    <div className={style.content}>
                        <div className={style.itemContent}>
                            <div className={style.itemTop}>
                                {showBurger && screen >= 420? (
                                    <BurgerButton classname='navExtender'
                                        Icon={!extendMenu? BiMenu: BiX} 
                                        onclick={(e:any) => {
                                            e.stopPropagation();
                                            setExtendMenu(!extendMenu);
                                        }} />
                                ): <></>}
                            </div>
                            <div className={style.itemMidle}>
                                {items.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = path === item.link;
                                    return(
                                        <Link href={`${item.link}`} key={`${item.text}-${index}`}
                                            className={`${isActive ? "active" : "disabled"} navlink`}>
    
                                            <div className={style.item} >
                                                <span className={style.icon} > <Icon fontSize={20} /> </span>
                                                <span className={extendMenu? style.itemText: classname}>
                                                    {item.text}
                                                </span>
                                            </div>
                                        </Link>
                                    )
                                })}
    
                            </div>
                            <div className={style.itemBottom}>
                                <Link href='/settings' className={`${path === '/settings'? "active" : "disabled"} navlink`}>
                                    <div className={style.item}>
                                        <span className={style.icon}>
                                            <BiSolidCog fontSize={20} />
                                        </span>
                                        <span className={extendMenu? style.itemText: classname}>
                                            Configuraciones
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        }
    </>
}

export default SidebarLeft;