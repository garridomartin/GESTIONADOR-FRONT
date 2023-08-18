/* ===================================================
    Date: 2023-08-02
    Desc: Style Context Provider, Custom Hook
    Author: 🟣 Enoc Lima
=====================================================*/


"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

/********* typeScriptsTypes ***********/
type StyleContextValue = {
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