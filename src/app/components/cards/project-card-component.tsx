"use client";
import { Project } from "@/app/models/project-model";
import ActionButtonComponent from "../buttons/action-button-component";
import { ActionButtonProps } from "@/app/models/button-custom-model";
import ImageCarousel from "../carousel-component";

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
        firstText: project.website ?? '',
        icon: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
    }

    return (
        <div className="project-grid">
            <div className="project-grid-title">
                <h4>{project.title}</h4>
                <p>{skillsParagraphs}</p>
                <p>{project.year}</p>
            </div>
            <div className="project-grid-gallery">
                <ImageCarousel images={project.images} />
            </div>
            <div className="project-grid-text">
                <div className="project-grid-subtitle paragraphs-container">
                    {paragraphs}
                </div>
            </div>
            <div className="project-grid-link">
                {
                    project.website &&
                    <a href={project.website}>
                        <ActionButtonComponent {...props} />
                    </a>
                }
            </div>
        </div>
    );
}