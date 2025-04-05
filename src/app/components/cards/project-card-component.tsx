"use client";
import { Project } from "@/app/models/project-model";
import ActionButtonComponent from "../buttons/action-button-component";
import { ActionButtonProps } from "@/app/models/button-custom-model";
import { useState } from "react";

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
        icon: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
    }

    const [imgIndex, setImgIndex] = useState(0);
    const imagesCounter = project.images.length
    const imgControllerVisible = imagesCounter > 1;

    function nextImage() {
        setImgIndex((prevIndex) => (prevIndex + 1) % imagesCounter);
    }

    function previousImage() {
        setImgIndex((prevIndex) => (prevIndex - 1 + imagesCounter) % imagesCounter);
    }

    const imgController =
        <div className="project-images-controller-container">
            <span>{imgIndex + 1} / {project.images.length}</span>
            <div className="images-controller-buttons">
                <button onClick={previousImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" />
                    </svg>
                </button>
                <button onClick={nextImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" />
                    </svg>
                </button>

            </div>
        </div>

    return (
        <div className="project-grid">
            <div className="project-grid-title">
                <h4>{project.title}</h4>
                <p>{skillsParagraphs}</p>
                <p>{project.year}</p>
            </div>
            <div className="project-grid-gallery">
                <div className="gallery-container">
                    <img src={project.images[imgIndex].src} alt={project.images[imgIndex].alt}></img>
                </div>
                {
                    imgControllerVisible && imgController
                }
            </div>
            <div className="project-grid-text">
                <div className="project-grid-subtitle paragraphs-container">
                    {paragraphs}
                </div>
            </div>
            <div className="project-grid-link">
                <a href={project.website}>
                    <ActionButtonComponent {...props} />
                </a>
            </div>
        </div>
    );
}