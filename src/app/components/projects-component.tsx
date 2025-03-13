import { Project } from "../models/project-model";
import ProjectCardComponent from "./cards/project-card-component";

const projectCompound: Project = {
    title: 'Compound Interest Calculator',
    skills: [
        'Web Development',
        'Design',
        'Idea',
    ],
    year: '2024',
    images: [
        {
            src: '/assets/images/andrey-project-1.png',
            alt: 'web-image'
        }
    ],
    paragraphs: [
        'This side project started from my personal interest in the effects of compound interest.',
        'My goal was to create a simple, user-friendly tool that hides all the complexity — something people could use regularly.',
        'The project was developed using TypeScript, React, Vite, and deployed on Cloudflare Pages.',
    ],
    website: 'www.savings.lol'
}

export default function ProjectsComponent() {
    return (
        <section className="projects-container">
            <h3>PROJECTS</h3>
            <hr className="mar-bot-3" />
            <div className="projects-cards-container">
                <ProjectCardComponent project={projectCompound} />
            </div>
        </section>
    );
}