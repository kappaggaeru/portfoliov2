"use client";
import { useLanguage } from "../context/LanguageContext";
import { Experience } from "../models/experience-model";
import ExperienceCardComponent from "./cards/experience-card-component";

export default function ExperienceComponent() {
    const { t } = useLanguage();

    const experienceEdsa: Experience = {
        company: t.experienceCompany,
        subtitle: t.experienceDesd,
        time: t.experiencePeriod,
        responsabilities: [
            t.experienceP1,
            t.experienceP2
        ],
        position: t.experiencePosition,
        location: t.experienceLocation,
        industry: t.experienceIndustry,
        website: t.experienceWebsite
    }

    return (
        <section id="experience" className="experience-container content-container">
            <h3 className="title-section">{t.experience}</h3>
            <hr className="mar-bot" />
            <div className="experience-cards-container">
                <ExperienceCardComponent experience={experienceEdsa} />
            </div>
        </section>
    );
}