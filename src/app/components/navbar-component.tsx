'use client';
import { useMenu } from "../context/MenuContext";
import ActionButtonComponent from "./buttons/action-button-component";
import ToggleThemeButton from "./buttons/toggle-theme-button-component";
import MenuComponent from "./menu-component";

export default function NavbarComponent() {
    const { showMenu, toggleMenu } = useMenu();

    const links = [
        "about",
        "experience",
        "projects",
        "contact"
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
                    <p>Based in</p>
                    <p>London, United Kingdom</p>
                </div>
                <div className="navbar-contact-container">
                    <ActionButtonComponent texts={["Say hello", "privet.dev@pm.me"]} />
                </div>
                <div className="navbar-theme-container">
                    <ToggleThemeButton />
                </div>
                <div className="navbar-links-container">
                    {navbarLinks}
                </div>
                <div onClick={toggleMenu} className="navbar-menu-button">
                    <ActionButtonComponent texts={["MENU"]} />
                </div>
            </div>
            <div className={showMenu ? "d-block" : "d-none"}>
                <MenuComponent />
            </div>
        </div>
    );
}

