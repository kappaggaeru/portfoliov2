import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.classList.add(storedTheme);
        document.documentElement.classList.remove(storedTheme === "light" ? "dark" : "light");

        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            themeColor.setAttribute("content", storedTheme === "light" ? "#FFFFFF" : "#242126");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        const oldTheme = theme;

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.add(newTheme);
        document.documentElement.classList.remove(oldTheme);

        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            themeColor.setAttribute("content", newTheme === "light" ? "#FFFFFF" : "#242126");
        }
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