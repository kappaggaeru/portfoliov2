"use client";
import { createContext, ReactNode, useContext } from "react";
import { MenuProvider } from "./MenuContext";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

const ThemeContext = createContext(undefined);
const MenuContext = createContext(undefined);
const LanguageContext = createContext(undefined);

export const useTheme = () => useContext(ThemeContext);
export const useMenu = () => useContext(MenuContext);
export const useLanguage = () => useContext(LanguageContext);


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider>
            <MenuProvider>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </MenuProvider>
        </ThemeProvider>
    );
};

export default AppProviders;