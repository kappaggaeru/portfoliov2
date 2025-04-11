"use client";
import { useLanguage } from "../context/LanguageContext";
import { Project } from "../models/project-model";
import ProjectCardComponent from "./cards/project-card-component";

export default function ProjectsComponent() {
    const { t } = useLanguage();

    const projectCompound: Project = {
        title: t.projectTitle,
        skills: [
            t.projectSkill1,
            t.projectSkill2,
            t.projectSkill3,
        ],
        year: t.projectYear,
        images: [
            {
                src: '/assets/images/pokedex-portfolio.png',
                alt: t.projectImageAlt
            }
        ],
        paragraphs: [
            t.projectP1,
            t.projectP2,
            t.projectP3
        ]
    }

    return (
        <section id="projects" className="projects-container content-container">
            <h3 className="title-section">{t.projects}</h3>
            <hr className="mar-bot" />
            <div className="projects-cards-container">
                <ProjectCardComponent project={projectCompound} />
            </div>
        </section>
    );
}