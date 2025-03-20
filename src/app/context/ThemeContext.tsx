"use client";
import { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Definir la interfaz del contexto
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Crear el contexto con un valor inicial vacío para evitar errores
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor del contexto
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);

        // Aplicar la clase al <html>
        document.documentElement.classList.add(storedTheme);
        document.documentElement.classList.remove(storedTheme === "light" ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        // Cambiar la clase en el <html>
        document.documentElement.classList.add(newTheme);
        document.documentElement.classList.remove(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para consumir el contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe usarse dentro de un ThemeProvider");
    }
    return context;
};