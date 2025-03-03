import FooterComponent from "./components/footer-component";
import NavbarComponent from "./components/navbar-component";
import WelcomeComponent from "./components/welcome-component";
import { MenuProvider } from "./context/MenuContext";

export default function Home() {
    return (
        <MenuProvider>
            <section className="site-container">
                <header className="header-container">
                    <NavbarComponent />
                </header>
                <main className="main-container">
                    <WelcomeComponent />
                </main>
                <footer className="footer-container">
                    <FooterComponent />
                </footer>
            </section>
        </MenuProvider>
    );
}

