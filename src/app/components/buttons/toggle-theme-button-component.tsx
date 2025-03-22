import { useTheme } from "@/app/context/ThemeContext";
import ActionButtonComponent from "./action-button-component";

export default function ToggleThemeButton() {
    const { theme, toggleTheme } = useTheme();

    const currentTheme = theme == "light" ? "Light Mode" : 'Dark Mode';

    return (
        <div onClick={toggleTheme}>
            <ActionButtonComponent texts={["Switch to", currentTheme]} styleClass="text-align-end"/>
        </div>
    );
}