import { Project } from "@/app/models/project-model";

export default function ProjectCardComponent({ project }: { project: Project }) {

    const skillsParagraphs = project.skills.map((skill, index) =>
        <span key={index}>
            {skill}
            {index < project.skills.length - 1 && ', '}
        </span>
    );

    return (
        <div>
            <h4>{project.title}</h4>
            <div className="experience-subtitle-container">
                <p>{skillsParagraphs}</p>
                <p>{project.year}</p>
            </div>
            <div className="project-image-container">
                <img src={project.images[0].src} alt={project.images[0].alt}></img>
            </div>
        </div>
    );
}