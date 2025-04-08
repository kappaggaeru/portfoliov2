import { useLanguage } from "../context/LanguageContext";
import { useMenu } from "../context/MenuContext";
import ActionButtonComponent from "./buttons/action-button-component";
import LanguageButtonComponent from "./buttons/language-change-button-component";
import ToggleThemeButton from "./buttons/toggle-theme-button-component";

export default function MenuComponent() {
    const { toggleMenu } = useMenu();
    const { t } = useLanguage();

    function CloseMenuButton() {
        return (
            <div onClick={toggleMenu}>
                <ActionButtonComponent firstText={t.close} styleClass="menu-button"/>
            </div>
        )
    }

    const labels = [
        t.about,
        t.experience,
        t.projects,
        t.contact
    ];

    const listLabels = labels.map((label, index) =>
        <li key={index}>
            <a href={`#${label}`} className="a-navbar" onClick={toggleMenu}>
                {label}
            </a>
        </li>
    );

    function MenuLinks() {
        return (
            <div className="menu-links-container">
                <ul>
                    {listLabels}
                </ul>
            </div>
        )
    }

    function FooterMenu() {
        return (
            <div className="footer-menu-container">
                <div className="footer-menu-item">
                    <LanguageButtonComponent />
                </div>
                <ToggleThemeButton styleClass="toggle-theme-button text-align-end" />
            </div>
        )
    }

    return (
        <div className="menu-container">
            <div className="menu-header-container">
                <CloseMenuButton />
            </div>
            <div className="menu-content-container">
                <div className="links-container">
                    <MenuLinks />
                </div>
                <div className="menu-footer-container">
                    <FooterMenu />
                </div>
            </div>
        </div>
    );
}