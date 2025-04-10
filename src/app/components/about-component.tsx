"use client";
import { useLanguage } from "../context/LanguageContext";
import { ActionButtonProps } from "../models/button-custom-model";
import ActionButtonComponent from "./buttons/action-button-component"

export default function AboutComponent() {
    const { t } = useLanguage();

    const props: ActionButtonProps = {
        firstText: t.linkedin,
        icon: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
    }


    const arrayParagraphs = [
        t.aboutP1,
        t.aboutP2,
        t.aboutP3
    ];

    const paragraphs = arrayParagraphs.map((p, index) =>
        <p key={index}>
            {p}
        </p>
    );

    const title = t.aboutDesc;

    const role =
        <div>
            <p>{t.role1}</p>
            <p>{t.role2}</p>
        </div>

    return (
        <section id="about" className="about-container content-container">
            <h3 className="title-section">{t.about}</h3>
            <hr className="mar-bot" />
            <div className="about-grid-container">
                <div className="about-grid-title">
                    <h4 className="mar-bot grid-about-title">{title}</h4>
                </div>
                <div className="about-grid-text">
                    <section className="paragraphs-container grid-about-paragraph">
                        {paragraphs}
                    </section>
                </div>
                <div className="about-grid-links">
                    <div className="grid-links">
                        <div className="role-link-container">{role}</div>
                        <div className="contact-link-container contact-mail">
                            <a href={"mailto:" + t.mail + "?subject=" + t.subjectMail}>
                                <ActionButtonComponent firstText={t.hello} secondText={t.mail} />
                            </a>
                        </div>
                        <div className="explore-link-container">
                            <a href="https://www.linkedin.com/in/kappaggaeru/" target="blank">
                                <ActionButtonComponent {...props} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}