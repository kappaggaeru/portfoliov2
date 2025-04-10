"use client";
import { ActionButtonProps } from "@/app/models/button-custom-model";
import { Experience } from "@/app/models/experience-model";
import ActionButtonComponent from "../buttons/action-button-component";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ExperienceCardComponent({ experience }: { experience: Experience }) {
    const { t } = useLanguage();

    const paragraphs = experience.responsabilities.map((experience, index) =>
        <p key={index}>
            {experience}
        </p>
    );

    const props: ActionButtonProps = {
        firstText: experience.website ? experience.website : '',
        icon: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
    }

    return (
        <div>
            <div className="experience-grid">
                <div className="experience-grid-title">
                    <h4>{experience.company}</h4>
                </div>
                <div className="experience-grid-subtitle mar-top-1">
                    <div className="grid-subtitle">
                        <p>{experience.subtitle}</p>
                        <p>{experience.time}</p>
                    </div>
                </div>
                <div className="experience-grid-text mar-top-1">
                    <section className="paragraphs-container">
                        {paragraphs}
                    </section>
                </div>
                <div className="experience-grid-table mar-top-1">
                    <div className="experience-table">
                        <p>{t.positionLabel}</p>
                        <p>{experience.position}</p>
                        <p>{t.locationLabel}</p>
                        <p>{experience.location}</p>
                        <p>{t.industryLabel}</p>
                        <p>{experience.industry}</p>
                        {
                            experience.website && <p>{t.websiteLabel}</p>
                        }
                        {
                            experience.website &&
                            <p>
                                <a href={"https://" + experience.website} target="blank">
                                    <ActionButtonComponent {...props} />
                                </a>
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}