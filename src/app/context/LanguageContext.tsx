"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { translations } from "../js/translations";

interface LanguageContextType {
    language: string;
    changeLanguage: (language: string) => void;
    t: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<string>('en');
    
    useEffect(() => {
        const defaultLang = localStorage.getItem("language");
        if (defaultLang) {
            localStorage.setItem("language", defaultLang);
        }
    }, []);

    const changeLanguage = (lang: string) => {
        if (translations[lang]) {
            setLanguage(lang);
        } else {
            console.warn(`Language not supported: ${lang}`);
        }
    };

    const t = translations[language] || translations['en'];

    return (
        <LanguageContext value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de LanguageProvider");
    }
    return context;
};