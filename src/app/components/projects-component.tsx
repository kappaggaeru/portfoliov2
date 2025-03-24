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

const projectBrowser: Project = {
    title: 'Browser Agnostic Tab Manager',
    skills: [
        'Web Development',
        'Design',
        'Idea',
    ],
    year: '2022',
    images: [
        {
            src: '/assets/images/andrey-project-1.png',
            alt: 'web-image'
        },
        {
            src: '/assets/images/andrey-project-2.png',
            alt: 'web-image'
        }
    ],
    paragraphs: [
        'The project has been created to solve the personal problem of organising learning resources.',
        'I was hoping to create a tool that would help me quickly capture and re-share various resources without being limited to a single device or web browser.',
        'The project was built using TypeScript, React, and Tailwind CSS, with data stored in MongoDB.'
    ],
    website: 'www.tabager.com'
}

export default function ProjectsComponent() {
    return (
        <section className="projects-container content-container">
            <h3>PROJECTS</h3>
            <hr className="mar-bot-3" />
            <div className="projects-cards-container">
                <ProjectCardComponent project={projectCompound} />
                <ProjectCardComponent project={projectBrowser} />
            </div>
        </section>
    );
}