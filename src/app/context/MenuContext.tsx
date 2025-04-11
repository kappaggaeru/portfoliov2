import { createContext, useState, useContext, ReactNode } from "react";

// Definir la interfaz del contexto
interface MenuContextType {
    showMenu: boolean;
    toggleMenu: () => void;
}

// Crear el contexto con un valor inicial vacío para evitar errores
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Proveedor del contexto
export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevShowMenu => {
            const newShowMenu = !prevShowMenu;
    
            if (typeof window !== 'undefined') {
                const mainContainer = document.querySelector("#main-container");
                if (mainContainer) {
                    mainContainer.classList.toggle("main-d-none", newShowMenu);
                }
            }
    
            return newShowMenu;
        });
    };

    return (
        <MenuContext value={{ showMenu, toggleMenu }}>
            {children}
        </MenuContext>
    );
};

// Hook personalizado para consumir el contexto
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu debe usarse dentro de un MenuProvider");
    }
    return context;
};
