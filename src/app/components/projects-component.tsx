import { Project } from "../models/project-model";
import ProjectCardComponent from "./cards/project-card-component";

const projectCompound: Project = {
    title: 'Compound Interest Calculator',
    skills: [
        {
            title: 'Web Development',
            id: 1
        },
        {
            title: 'Design',
            id: 2
        },
        {
            title: 'Idea',
            id: 3
        }
    ],
    year: '2024',
    images: [
        {
            title: '',
            id: 1
        },
        {
            title: '',
            id: 2
        }
    ],
    paragraphs: [
        {
            title: 'This side project started from my personal interest in the effects of compound interest.',
            id: 1
        },
        {
            title: 'My goal was to create a simple, user-friendly tool that hides all the complexity — something people could use regularly.',
            id: 2
        },
        {
            title: 'The project was developed using TypeScript, React, Vite, and deployed on Cloudflare Pages.',
            id: 3
        }
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