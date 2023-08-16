/* ===================================================
    Date: 2023-08-02
    Desc: Style Context Provider, Custom Hook
    Author: 🟣 Enoc Lima
=====================================================*/


"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import styleColors from '@/assets/configs/app.colors.json';

/********* typeScriptsTypes ***********/
type StyleContextValue = {
    readonly buttons: typeof styleColors.buttons,
    readonly inputs: typeof styleColors.inputs,
    readonly title: typeof styleColors.title,
    readonly text: typeof styleColors.text,
    readonly links: typeof styleColors.links,
    readonly background: typeof styleColors.background,
    readonly divider: typeof styleColors.divider,
    readonly actions: typeof styleColors.actions,
    readonly colors: typeof styleColors.colors,
    readonly screen: number;
    setScreen?: (value: number) => void;
    readonly sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    readonly showBurger: boolean;
    setShowBurger: (open: boolean) => void;
    readonly extendMenu: boolean;
    setExtendMenu: (open: boolean) => void;
}

type StyleProviderProps = {
    children: ReactNode;
}
/********* end typeScriptsTypes ***********/


const StyleContext = createContext<StyleContextValue>({} as StyleContextValue);

export const useStyle = (): StyleContextValue => {
    const context = useContext(StyleContext);
    if (!context) throw new Error("This hook can by use in StyleProvider");
    return context;
};

const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
    const [screen, setScreen] = useState<number>(0);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showBurger, setShowBurger] = useState(false);
    const [extendMenu, setExtendMenu] = useState(true);

    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        screen <= 420 ? setSidebarOpen(false): setSidebarOpen(true);
    }, [screen]);

    useEffect(() => {
        setScreen(window.innerWidth);
    }, []);

    return typeof window !== 'undefined' ? (
        <StyleContext.Provider value={{
            buttons: styleColors.buttons,
            inputs: styleColors.inputs,
            title: styleColors.title,
            text: styleColors.text,
            links: styleColors.links,
            background: styleColors.background,
            divider: styleColors.divider,
            actions: styleColors.actions,
            colors: styleColors.colors,
            screen,
            setSidebarOpen,
            sidebarOpen,
            setShowBurger,
            showBurger,
            extendMenu,
            setExtendMenu
        }}>
            {children}
        </StyleContext.Provider>
    ) : <>{children}</>;
}

export default StyleProvider;