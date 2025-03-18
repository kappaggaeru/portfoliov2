'use client';
import { useMenu } from "../context/MenuContext";
import ActionButtonComponent from "./buttons/action-button-component";
import MenuComponent from "./menu-component";

export default function NavbarComponent() {
    const { showMenu, toggleMenu } = useMenu();

    return (
        <div>
            <div className="navbar-container">
                <div>
                    <p>Based in</p>
                    <p>London, United Kingdom</p>
                </div>
                <div onClick={toggleMenu}>
                    <ActionButtonComponent texts={["MENU"]} />
                </div>
            </div>
            <div className={showMenu ? "d-block" : "d-none"}>
                <MenuComponent />
            </div>
        </div>
    );
}

