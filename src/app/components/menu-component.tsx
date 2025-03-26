import { useMenu } from "../context/MenuContext";
import ActionButtonComponent from "./buttons/action-button-component";
import ToggleThemeButton from "./buttons/toggle-theme-button-component";

export default function MenuComponent() {
    const { toggleMenu } = useMenu();

    function CloseMenuButton() {
        return (
            <div onClick={toggleMenu}>
                <ActionButtonComponent texts={["CLOSE"]} />
            </div>
        )
    }

    function MenuLinks() {
        return (
            <div className="menu-links-container">
                <ul>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            EXPERIENCE
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    function FooterMenu() {
        return (
            <div className="footer-menu-container">
                <div className="footer-menu-item">
                    <ActionButtonComponent texts={["Say hello", "privet.dev@pm.me"]} />
                </div>
                <ToggleThemeButton styleClass="text-align-end" />
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