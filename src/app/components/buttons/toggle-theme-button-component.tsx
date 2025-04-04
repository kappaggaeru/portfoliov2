import { useTheme } from "@/app/context/ThemeContext";
import ActionButtonComponent from "./action-button-component";

export default function ToggleThemeButton({ styleClass }: {styleClass?: string}) {
    const { theme, toggleTheme } = useTheme();

    const currentTheme = theme == "light" ? "Dark Mode" : 'Light Mode';

    return (
        <div onClick={toggleTheme}>
            <ActionButtonComponent texts={["Switch to", currentTheme]} styleClass={styleClass}/>
        </div>
    );
}