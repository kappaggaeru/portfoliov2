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
            src: '/assets/images/andrey-project-2.png',
            alt: 'web-image'
        },
        {
            src: '/assets/images/andrey-project-3.png',
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

const projectDrift: Project = {
    title: 'Drift Focus & Meditation',
    skills: [
        'iOS Development'
    ],
    year: '2022',
    images: [
        {
            src: '/assets/images/andrey-project-4.png',
            alt: 'web-image'
        },
        {
            src: '/assets/images/andrey-project-5.png',
            alt: 'web-image'
        },
        {
            src: '/assets/images/andrey-project-6.png',
            alt: 'web-image'
        }
    ],
    paragraphs: [
        'As a part of a small team, I helped plan, develop and launch a native iOS application for a client in the mental health sector.',
        'Drift combined meditation & with popular focus methods to help users improve their focus. The app offered an extra level of customisation, with the ability to create custom focus sessions to suit user needs.',
        'The project was built with Swift and MVVM architecture, integrating RevenueCat for the in-app payments.'
    ],
    website: 'Project details'
}

export default function ProjectsComponent() {
    return (
        <section id="projects" className="projects-container content-container">
            <h3 className="title-section">PROJECTS</h3>
            <hr className="mar-bot" />
            <div className="projects-cards-container">
                <ProjectCardComponent project={projectCompound} />
                <ProjectCardComponent project={projectBrowser} />
                <ProjectCardComponent project={projectDrift} />
            </div>
        </section>
    );
}