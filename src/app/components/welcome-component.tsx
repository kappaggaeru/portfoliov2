"use client";

import { useLanguage } from "../context/LanguageContext";

export default function WelcomeComponent() {
    const { t } = useLanguage();

    return (
        <section className="welcome-container">
            <h1>
                <span className="welcome-name">Lautaro</span>
                <span className="welcome-lastname">Olivera</span>
            </h1>
            <h2>{t.description}</h2>
        </section>
    );
}