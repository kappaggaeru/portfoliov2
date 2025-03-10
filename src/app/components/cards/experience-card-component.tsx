
import { Experience } from "@/app/models/experience-model";

export default function ExperienceCardComponent({ experience }: { experience: Experience }) {

    const experienceParagraphs = experience.responsabilities.map(experience =>
        <p key={experience.id}>
            {experience.title}
        </p>
    );

    return (
        <div>
            <h4>{experience.company}</h4>
            <div className="experience-subtitle-container">
                <p>{experience.subtitle}</p>
                <p>{experience.time}</p>
            </div>
            <div className="paragraphs-container">
                {experienceParagraphs}
            </div>
            <div className="experience-data-container">
                <div className="experience-row">
                    <p>Position</p>
                    <p className="bold">{experience.position}</p>
                </div>
                <div className="experience-row">
                    <p>Location</p>
                    <p className="bold">{experience.location}</p>
                </div>
                <div className="experience-row">
                    <p>Industry</p>
                    <p className="bold">{experience.industry}</p>
                </div>
                {
                    experience.website &&
                    <div className="experience-row">
                        <p>Website</p>
                        <a href={experience.website} className="bold button-link link-w-icon">
                            {experience.website}
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon css-1tetme1"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}