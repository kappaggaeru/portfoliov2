import AboutComponent from "./components/about-component";
import ExperienceComponent from "./components/experience-component";
import FooterComponent from "./components/footer-component";
import NavbarComponent from "./components/navbar-component";
import ProjectsComponent from "./components/projects-component";
import WelcomeComponent from "./components/welcome-component";
import AppProviders from "./context/AppContext";

export default function Home() {
    return (
        <AppProviders>
            <section className="site-container">
                <header className="header-container">
                    <NavbarComponent />
                </header>
                <main className="main-container" id="main-container">
                    <WelcomeComponent />
                    <AboutComponent />
                    <ExperienceComponent />
                    <ProjectsComponent />
                </main>
                <footer className="footer-container">
                    <FooterComponent />
                </footer>
            </section>
        </AppProviders>
    );
}

