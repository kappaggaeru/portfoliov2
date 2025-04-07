import { useTheme } from "@/app/context/ThemeContext";
import ActionButtonComponent from "./action-button-component";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ToggleThemeButton({ styleClass }: {styleClass?: string}) {
    const { theme, toggleTheme } = useTheme();
    const { t } = useLanguage();

    const currentTheme = theme == "light" ? t.darkMode : t.lightMode;

    return (
        <div onClick={toggleTheme}>
            <ActionButtonComponent firstText={t.switchTo} secondText={currentTheme} styleClass={styleClass}/>
        </div>
    );
}