'use client';
import { useLanguage } from "../context/LanguageContext";
import { useMenu } from "../context/MenuContext";
import ActionButtonComponent from "./buttons/action-button-component";
import LanguageButtonComponent from "./buttons/language-change-button-component";
import ToggleThemeButton from "./buttons/toggle-theme-button-component";
import MenuComponent from "./menu-component";

export default function NavbarComponent() {
    const { showMenu, toggleMenu } = useMenu();
    const { t, changeLanguage, language } = useLanguage();

    const links = [
        t.about,
        t.experience,
        t.projects,
        t.contact
    ];

    const navbarLinks = links.map((link, index) =>
        <a href={`#${link}`} key={index}>
            <button>
                {link}
            </button>
        </a>
    );

    return (
        <div>
            <div className="grid-navbar">
                <div className="navbar-location-container">
                    <p className="f-letter-capital">{t.located}</p>
                    <p className="capital-case">{t.location}</p>
                </div>
                <div className="navbar-contact-container">
                    <LanguageButtonComponent />
                </div>
                <div className="navbar-theme-container">
                    <ToggleThemeButton styleClass="toggle-theme-button"/>
                </div>
                <div className="navbar-links-container">
                    {navbarLinks}
                </div>
                <div onClick={toggleMenu} className="navbar-menu-button menu-button">
                    <ActionButtonComponent firstText={"menu"} />
                </div>
            </div>
            <div className={showMenu ? "d-block" : "d-none"}>
                <MenuComponent />
            </div>
        </div>
    );
}

