import { Project } from "@/app/models/project-model";

export default function ProjectCardComponent ({ project }: { project: Project}) {

    const skillsParagraphs = project.skills.map(skill =>
        <span key={skill.id}>{skill.title}, </span>
    );

    return (
        <div>
            <h4>{project.title}</h4>
            <div>
                <p>{skillsParagraphs}</p>
            </div>
            <p>{project.year}</p>
        </div>
    );
}