import { Project } from "@/app/models/project-model";
import ActionButtonComponent from "../buttons/action-button-component";
import { ActionButtonProps } from "@/app/models/button-custom-model";

export default function ProjectCardComponent({ project }: { project: Project }) {

    const skillsParagraphs = project.skills.map((skill, index) =>
        <span key={index}>
            {skill}
            {index < project.skills.length - 1 && ', '}
        </span>
    );

    const paragraphs = project.paragraphs.map((experience, index) =>
        <p key={index}>
            {experience}
        </p>
    );

    const props: ActionButtonProps = {
        texts: [project.website],
        icon: {
            path: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
        }
    }

    return (
        <div>
            <div className="project-grid">
                <div className="project-grid-title">
                    <h4>{project.title}</h4>
                    <p>{skillsParagraphs}</p>
                    <p>{project.year}</p>
                </div>
                <div className="project-grid-gallery">
                    <div className="gallery-container">
                        <img src={project.images[0].src} alt={project.images[0].alt}></img>
                    </div>
                </div>
                <div className="project-grid-text">
                    <div className="grid-subtitle">
                        {paragraphs}
                    </div>
                </div>
                <div className="project-grid-link">
                    <a href={project.website}>
                        <ActionButtonComponent {...props} />
                    </a>
                </div>
            </div>
        </div>
    );
}