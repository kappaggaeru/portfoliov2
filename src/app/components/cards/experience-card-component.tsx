
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
                        <p className="bold">{experience.website}</p>
                    </div>
                }
            </div>
        </div>
    );
}