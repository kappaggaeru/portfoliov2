import { useLanguage } from "@/app/context/LanguageContext";
import ActionButtonComponent from "./action-button-component";

export default function LanguageButtonComponent() {
    const { t, changeLanguage, language } = useLanguage();

    const currentLanguage = language == "en" ? "es" : "en";

    return (
        <div onClick={() => (changeLanguage(currentLanguage))}>
            <ActionButtonComponent firstText={ t.switchLanguage } secondText={ t.language } styleClass="toggle-theme-button"/>
        </div>
    );
}