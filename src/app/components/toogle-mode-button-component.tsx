import { useEffect, useState } from "react";

export default function ToggleModeButton() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        console.log('es darkMode: ', darkMode);
        if (darkMode) {
            root.style.setProperty("--background", "#121212");
            root.style.setProperty("--foreground", "#fff");
            localStorage.setItem("theme", "dark");
        } else {
            root.style.setProperty("--background", "#eee");
            root.style.setProperty("--foreground", "#333");
            localStorage.setItem("theme", "light");
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