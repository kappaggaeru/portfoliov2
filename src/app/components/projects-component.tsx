"use client";
import { useLanguage } from "../context/LanguageContext";
import { Project } from "../models/project-model";
import ProjectCardComponent from "./cards/project-card-component";

export default function ProjectsComponent() {
    const { t } = useLanguage();

    const projectCompound: Project = {
        title: t.project1Title,
        skills: [
            t.project1Skill1,
            t.project1Skill2,
            t.project1Skill3,
        ],
        year: t.project1Year,
        images: [
            {
                src: '/assets/images/pokedex1-portfolio.png',
                alt: t.project1ImageAlt
            },
            {
                src: '/assets/images/pokedex2-portfolio.png',
                alt: t.project1ImageAlt
            },
            {
                src: '/assets/images/pokedex3-portfolio.png',
                alt: t.project1ImageAlt
            },
            {
                src: '/assets/images/pokedex4-portfolio.png',
                alt: t.project1ImageAlt
            },
        ],
        paragraphs: [
            t.project1P1,
            t.project1P2,
            t.project1P3
        ],
        website: "https://pokedex-one-beta-60.vercel.app/"
    }

    const projectReplicant: Project = {
        title: t.project2Title,
        skills: [
            t.project2Skill1,
            t.project2Skill2,
            t.project2Skill3,
        ],
        year: t.project2Year,
        images: [
            {
                src: '/assets/images/areYouAReplicant-portfolio.png',
                alt: t.project2ImageAlt
            }
        ],
        paragraphs: [
            t.project2P1,
            t.project2P2,
            t.project2P3
        ]
    }

    return (
        <section id="projects" className="projects-container content-container">
            <h3 className="title-section">{t.projects}</h3>
            <hr className="mar-bot" />
            <div className="projects-cards-container">
                <ProjectCardComponent project={projectCompound} />
                <ProjectCardComponent project={projectReplicant} />
            </div>
        </section>
    );
}