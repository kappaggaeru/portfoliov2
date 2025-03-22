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
        <button key={index}>{link}</button>
    );

    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-location-container">
                    <p>Based in</p>
                    <p>London, United Kingdom</p>
                </div>
                <div className="navbar-contact-container navbar-button">
                    <ActionButtonComponent texts={["Say hello", "privet.dev@pm.me"]} />
                </div>
                <div className="theme-navbar-container navbar-button">
                    <ToggleThemeButton />
                </div>
                <nav className="navbar-links-container navbar-button">
                    {navbarLinks}
                </nav>
                <div onClick={toggleMenu} className="menu-navbar-button">
                    <ActionButtonComponent texts={["MENU"]} />
                </div>
            </div>
            <div className={showMenu ? "d-block" : "d-none"}>
                <MenuComponent />
            </div>
        </div>
    );
}

