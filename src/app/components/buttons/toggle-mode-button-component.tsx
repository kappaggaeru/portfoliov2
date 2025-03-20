import { useTheme } from "@/app/context/ThemeContext";

export default function ToggleModeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="button-link" onClick={toggleTheme}>
            <p>Switch to</p>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </div>
    );
}