import { useEffect, useState } from "react";

export default function ToggleModeButton() {
    const [darkMode, setDarkMode] = useState(false);

    // cargar tema desde localStorage solo en el cliente
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") === "dark";
            setDarkMode(savedTheme);
        }
    }, []);

    // actualizar el tema en localStorage y las variables CSS
    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = document.documentElement;
            if (darkMode) {
                root.style.setProperty("--background", "#121212");
                root.style.setProperty("--foreground", "#fff");
                localStorage.setItem("theme", "dark");
            } else {
                root.style.setProperty("--background", "#eee");
                root.style.setProperty("--foreground", "#333");
                localStorage.setItem("theme", "light");
            }
        }
    }, [darkMode]);

    function toggleMode() {
        setDarkMode(!darkMode);
    }

    return (
        <div className="button-link" onClick={toggleMode}>
            <p>Switch to</p>
            <p>{!darkMode ? "dark" : "light"} mode</p>
        </div>
    );
}