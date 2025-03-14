import { useMenu } from "../context/MenuContext";
import ToggleModeButton from "./buttons/toggle-mode-button-component";

export default function MenuComponent() {
    const { toggleMenu } = useMenu();

    function CloseMenuButton() {
        return (
            <button onClick={toggleMenu} className="button-link">CLOSE</button>
        )
    }

    function MenuLinks() {
        return (
            <div className="menu-links-container">
                <ul>
                    <li>ABOUT</li>
                    <li>EXPERIENCE</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        )
    }

    function FooterMenu() {
        return (
            <div className="footer-menu-container">
                <div className="footer-menu-item button-link">
                    <p>Say hello</p>
                    <p>privet.dev@pm.me</p>
                </div>
                <ToggleModeButton />
            </div>
        )
    }

    return (
        <div className="menu-container">
            <div className="menu-header-container">
                <CloseMenuButton />
            </div>
            <div className="links-container">
                <MenuLinks />
            </div>
            <div className="menu-footer-container">
                <FooterMenu />
            </div>
        </div>
    );
}