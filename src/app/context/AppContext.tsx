"use client";
import { createContext, ReactNode, useContext } from "react";
import { MenuProvider } from "./MenuContext";
import { ThemeProvider } from "./ThemeContext";

const ThemeContext = createContext(undefined);
const MenuContext = createContext(undefined);

export const useTheme = () => useContext(ThemeContext);
export const useMenu = () => useContext(MenuContext);


const AppProviders = ({ children }: { children: ReactNode}) => {
    return (
        <ThemeProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </ThemeProvider>
    );
};

export default AppProviders;