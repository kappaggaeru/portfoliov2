'use client';
import { useMenu } from "../context/MenuContext";
import MenuComponent from "./menu-component";

export default function NavbarComponent( ) {
    const { showMenu, toggleMenu } = useMenu();

    return (
        <div>
            <div className="navbar-container">
                <div>
                    <p>Based in</p>
                    <p>London, United Kingdom</p>
                </div>
                <button onClick={toggleMenu} className="button-link">MENU</button>
            </div>
            {showMenu && <MenuComponent />}
        </div>
    );
}

