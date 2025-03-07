import AboutComponent from "./components/about-component";
import ExperienceComponent from "./components/experience-component";
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
                    <AboutComponent />
                    <ExperienceComponent />
                </main>
                <footer className="footer-container">
                    <FooterComponent />
                </footer>
            </section>
        </MenuProvider>
    );
}

